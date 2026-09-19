import re

# Fix Pricing.jsx
with open('components/Pricing.jsx', 'r') as f:
    content = f.read()

content = content.replace(
    'subtitle: "East Facing",',
    'subtitle: "East/West Facing",'
)

with open('components/Pricing.jsx', 'w') as f:
    f.write(content)

# Fix MasterPlan.jsx
with open('components/MasterPlan.jsx', 'r') as f:
    content = f.read()

content = content.replace(
    "label: '3 BHK East Facing',",
    "label: '3 BHK East/West Facing',"
)

with open('components/MasterPlan.jsx', 'w') as f:
    f.write(content)

print("East/West updated")
