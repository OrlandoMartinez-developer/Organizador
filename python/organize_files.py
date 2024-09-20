import os
import shutil

def organize_files(directory):
    try:
        for filename in os.listdir(directory):
            file_ext = filename.split('.')[-1]
            folder = os.path.join(directory, file_ext)
            if not os.path.exists(folder):
                os.makedirs(folder)
            shutil.move(os.path.join(directory, filename), os.path.join(folder, filename))
        print("Files organized successfully.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    import sys
    organize_files(sys.argv[1])