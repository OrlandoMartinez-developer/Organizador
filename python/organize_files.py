import os
import shutil

def organize_files(directory):
    try:
        for filename in os.listdir(directory):
            # Asegúrate de que sea un archivo, no un directorio
            if os.path.isdir(os.path.join(directory, filename)):
                print(f"Skipping directory: {filename}")
                continue

            file_ext = filename.split('.')[-1]
            folder = os.path.join(directory, file_ext)

            # Crear carpeta solo si no existe
            if not os.path.exists(folder):
                os.makedirs(folder)

            # Mover archivos a la carpeta correspondiente
            shutil.move(os.path.join(directory, filename), os.path.join(folder, filename))
        
        print("Files organized successfully.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    import sys
    organize_files(sys.argv[1])
