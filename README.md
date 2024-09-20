Organizador de Archivos
Descripción
Organizador de Archivos es una aplicación de escritorio desarrollada en Electron.js que permite a los usuarios organizar archivos en un directorio especificado. La aplicación tiene tres funciones principales:

Organizar Archivos: Agrupa los archivos en carpetas basadas en sus extensiones.
Eliminar Archivos Duplicados: Busca y elimina archivos duplicados en el directorio especificado.
Revisar Espacio en Disco: Verifica y muestra el espacio disponible en el disco duro.
La lógica detrás de estas funciones se implementa utilizando Python.

Requisitos
Node.js
Electron
Python
Paquetes de Python: os, shutil, hashlib
Instalación
Clona el repositorio:

bash
Copy code
git clone https://github.com/tu_usuario/organizador-de-archivos.git
cd organizador-de-archivos
Instala las dependencias de Node.js:

bash
Copy code
npm install
Asegúrate de tener Python instalado en tu sistema.

Ejecuta la aplicación:

bash
Copy code
npm start
Uso
Abre la aplicación.
Introduce la dirección del directorio que deseas organizar en el campo correspondiente.
Presiona uno de los siguientes botones:
Organizar Archivos: Agrupa los archivos en carpetas por extensión.
Eliminar Duplicados: Elimina archivos duplicados en el directorio.
Revisar Espacio: Muestra el espacio disponible en el disco duro.
Estructura del Proyecto
index.html: Interfaz de usuario de la aplicación.
renderer.js: Lógica del frontend de la aplicación.
main.js: Manejo del proceso principal de Electron y la comunicación con el backend de Python.
organize_files.py: Script en Python que organiza los archivos.
remove_duplicates.py: Script en Python que elimina los archivos duplicados.
check_space.py: Script en Python que verifica el espacio en disco.
