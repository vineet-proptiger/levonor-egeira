import re

with open('components/Navbar.jsx', 'r') as f:
    content = f.read()

# Base
content = re.sub(r'min-width: 280px !important;', 'min-width: 230px !important;', content)
content = re.sub(r'max-width: 315px !important;', 'max-width: 245px !important;', content)

# 992-1280
content = re.sub(r'min-width: 215px !important;', 'min-width: 175px !important;', content)
content = re.sub(r'max-width: 240px !important;', 'max-width: 185px !important;', content)

# 1281-1439
content = re.sub(r'min-width: 275px !important;', 'min-width: 220px !important;', content)
content = re.sub(r'max-width: 300px !important;', 'max-width: 230px !important;', content)

# 1440-1679
content = re.sub(r'min-width: 310px !important;', 'min-width: 250px !important;', content)
content = re.sub(r'max-width: 340px !important;', 'max-width: 260px !important;', content)

# 1680+
content = re.sub(r'min-width: 355px !important;', 'min-width: 280px !important;', content)
content = re.sub(r'max-width: 390px !important;', 'max-width: 290px !important;', content)

with open('components/Navbar.jsx', 'w') as f:
    f.write(content)

print("Done")
