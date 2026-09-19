import re

with open('components/Pricing.jsx', 'r') as f:
    content = f.read()

old_units = """const units = [
  {
    type: "3 BHK",
    subtitle: "East/West Facing",
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
    isPopular: true,
  }
];"""

new_units = """const units = [
  {
    type: "3 BHK",
    subtitle: "East Facing",
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
    isPopular: true,
  },
  {
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
  }
];"""

content = content.replace(old_units, new_units)

content = content.replace(
    'className="grid grid-cols-1 gap-8 max-w-[360px] mx-auto items-stretch justify-items-center"',
    'className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[760px] mx-auto items-stretch justify-items-center"'
)

with open('components/Pricing.jsx', 'w') as f:
    f.write(content)

print("Pricing updated")
