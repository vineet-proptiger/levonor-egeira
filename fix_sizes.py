import re

# Fix Pricing.jsx
with open('components/Pricing.jsx', 'r') as f:
    content = f.read()

# The second card in Pricing has subtitle "West Facing"
old_block_pricing = """  {
    type: "3 BHK",
    subtitle: "West Facing",
    tagline: "Spacious & Elegant",
    size: "1875 Sq.ft. ~ 2305 Sq.ft.","""

new_block_pricing = """  {
    type: "3 BHK",
    subtitle: "West Facing",
    tagline: "Spacious & Elegant",
    size: "2425 Sq.ft. ~ 2660 Sq.ft.","""

content = content.replace(old_block_pricing, new_block_pricing)

with open('components/Pricing.jsx', 'w') as f:
    f.write(content)


# Fix MasterPlan.jsx
with open('components/MasterPlan.jsx', 'r') as f:
    content = f.read()

old_block_mp = """  { 
    label: '3 BHK West Facing', 
    img: masterplanImages.bhk3 || masterplanImages.masterPlan,
    details: {
        saleableArea: '1875 Sq.ft. ~ 2660 Sq.ft.'
    }
  }"""

new_block_mp = """  { 
    label: '3 BHK West Facing', 
    img: masterplanImages.bhk3 || masterplanImages.masterPlan,
    details: {
        saleableArea: '2425 Sq.ft. ~ 2660 Sq.ft.'
    }
  }"""

content = content.replace(old_block_mp, new_block_mp)

with open('components/MasterPlan.jsx', 'w') as f:
    f.write(content)

print("Sizes updated")
