import os
import hashlib

def hash_file(file_path):
    h = hashlib.sha1()
    with open(file_path, 'rb') as file:
        chunk = 0
        while chunk != b'':
            chunk = file.read(1024)
            h.update(chunk)
    return h.hexdigest()

def remove_duplicates(directory):
    hashes = {}
    for filename in os.listdir(directory):
        file_path = os.path.join(directory, filename)
        file_hash = hash_file(file_path)
        if file_hash in hashes:
            os.remove(file_path)
            print(f"Removed duplicate: {filename}")
        else:
            hashes[file_hash] = file_path

if __name__ == '__main__':
    import sys
    remove_duplicates(sys.argv[1])
