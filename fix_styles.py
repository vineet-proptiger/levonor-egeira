import re

with open('components/Pricing.jsx', 'r') as f:
    content = f.read()

# Give crown to the first unit
content = content.replace(
    'isPopular: true,',
    'isPopular: true,\n    crown: true,'
)

# Make second unit popular so it shares the same styles
content = content.replace(
    'isPopular: false,',
    'isPopular: true,\n    crown: false,'
)

# Change the condition for the crown badge from isPopular to crown
content = content.replace(
    '{unit.isPopular && (',
    '{unit.crown && ('
)

with open('components/Pricing.jsx', 'w') as f:
    f.write(content)

print("Styles updated")
