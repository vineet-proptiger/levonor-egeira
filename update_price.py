import re

with open('components/Pricing.jsx', 'r') as f:
    content = f.read()

old_block = """  {
    type: "3 BHK",
    subtitle: "West Facing",
    tagline: "Spacious & Elegant",
    size: "1875 Sq.ft. ~ 2305 Sq.ft.",
    price: "₹ 1.66 Cr *",
    priceSub: "Starting At",
    btnText: "GET DETAILS",
    features: [
      "Unlock Pricing & Floor Plans",
      "Prime Radial Rd. 7 Location",
      "Seamless Connectivity",
    ],
    isPopular: false,
  }"""

new_block = """  {
    type: "3 BHK",
    subtitle: "West Facing",
    tagline: "Spacious & Elegant",
    size: "1875 Sq.ft. ~ 2305 Sq.ft.",
    price: "Ask For Price",
    priceSub: "PRICE ON REQUEST",
    btnText: "GET DETAILS",
    features: [
      "Unlock Pricing & Floor Plans",
      "Prime Radial Rd. 7 Location",
      "Seamless Connectivity",
    ],
    isPopular: false,
  }"""

content = content.replace(old_block, new_block)

with open('components/Pricing.jsx', 'w') as f:
    f.write(content)

print("Second card price updated")
