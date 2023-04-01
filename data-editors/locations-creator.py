import os
import json

dirs = os.listdir('.')
locations = []

for i in dirs:
    if (i == "locations-creator.py" or i == "locations.json"):
        continue
    data = i.split(',')
    lat = data[0] + '.' + data[1]
    lng = data[2] + '.' + data[3]

    filename = os.listdir(i)[0]
    if (len(filename) > 0):
        locations.append({
            "lat": float(lat),
            "lng": float(lng),
            # "image": os.path.abspath(os.getcwd()) + "\\" + i + "\\" + filename,
            "image": i + "\\" + filename,
            "name": "",
            "desc": "",
            "url": "https://www.google.com/maps/place/" + lat + "," + lng
        })
    else:
        print(f'File \'{i}\' contains 0 image. Passed.')

f = open("locations.json", "w")
f.write(json.dumps(locations))
f.close()
