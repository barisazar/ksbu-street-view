# This script created for windows usage.
import os

NONA_PATH = "C:/Program Files/Hugin/bin/nona.exe"

dirs = os.listdir('data')
counter = 0

print(f'NUMBER OF FOLDERS: {len(dirs) - 4}')

for i in dirs:
    print(f'DIRECTORY: {i}, COUNTER: {counter}')
    counter += 1
    if (i == 'output'):
        continue
    image_name = os.listdir(i)
    if (len(image_name) < 1):
        print(f'Directory {i} is empty. Directory passed.')
        continue
    os.system(
        f'python ./generate.py "{i + "/" + image_name[0]}" --nona "{NONA_PATH}" ')
    os.system(f'RMDIR /S /Q "{i}"')
    os.system(f'REN ".\\output\\" "{i}"')
