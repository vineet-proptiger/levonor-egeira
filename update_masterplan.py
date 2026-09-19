import re

with open('components/MasterPlan.jsx', 'r') as f:
    content = f.read()

# Update plans array
old_plans = """const plans = [
  { 
    label: '3 BHK Residence', 
    img: masterplanImages.bhk3 || masterplanImages.masterPlan,
    details: {
        saleableArea: '1875 Sq.ft. ~ 2660 Sq.ft.'
    }
  }
]"""

new_plans = """const plans = [
  { 
    label: '3 BHK East Facing', 
    img: masterplanImages.bhk3 || masterplanImages.masterPlan,
    details: {
        saleableArea: '1875 Sq.ft. ~ 2660 Sq.ft.'
    }
  },
  { 
    label: '3 BHK West Facing', 
    img: masterplanImages.bhk3 || masterplanImages.masterPlan,
    details: {
        saleableArea: '1875 Sq.ft. ~ 2660 Sq.ft.'
    }
  }
]"""

content = content.replace(old_plans, new_plans)

# Update grid layout
content = content.replace(
    'className="grid grid-cols-1 gap-8 max-w-[400px] mx-auto"',
    'className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[800px] mx-auto"'
)

with open('components/MasterPlan.jsx', 'w') as f:
    f.write(content)

print("MasterPlan updated")
