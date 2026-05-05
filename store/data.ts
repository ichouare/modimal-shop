export const hoverContentData = [
  {
    // Collection
    cardChoose: {
      "category": ["shop all", "boluses & top", "pants", "Dresses & jumpsuits", "outwear & jackets", "pullovers", "tees", "shorts & skirts"],
      "featured": ["new in", "modiweek", "plus size", "best seller"],
      "more": ["bundles", "occasion wear", "matching set", "suiting"]
    },
    images: [{ url: "/navigationPics/pic1.jpg", title: "New Arrivals" },
      { url: "/navigationPics/pic2.jpg", title: "New Arrivals" }
    ]
  },
  {
    // New In

    cardChoose: {
      "category": ["shop all", "boluses & top", "tees", "pants", "outwear & jackets", "jackets & outwears", "pullovers", "dresses & jumpsuits", "shorts & skirts"],
      "trending": ["plus size", "fall collection", "modiweek"],

    },
    images: [{ url: "/navigationPics/pic3.jpg", title: "fall collection" },
      { url: "/navigationPics/pic4.jpg", title: "boluses" },
       { url: "/navigationPics/pic5.jpg", title: "dresses" }
    ]
  },
  {
    // Modiweek
    cardChoose: {
       "category": ["shop all", "boluses & top", "tees", "pants", "outwear & jackets", "jackets & outwears", "pullovers", "dresses & jumpsuits", "shorts & skirts"],
    },
    images: [{ url: "/navigationPics/pic6.jpg", title: "Pants" }, { url: "/navigationPics/pic7.jpg", title: "dresses" },
    { url: "/navigationPics/pic8.jpg", title: "blouses" },
    ]
  },
  {
    // Modiweek
    cardChoose: {
       "category": ["shop all", "boluses & top", "tees", "pants", "outwear & jackets", "jackets & outwears", "pullovers", "dresses & jumpsuits", "shorts & skirts"],
    },
    images: [{ url: "/navigationPics/pic6.jpg", title: "Pants" }, { url: "/navigationPics/pic7.jpg", title: "dresses" },
    { url: "/navigationPics/pic8.jpg", title: "blouses" },
    ]
  },
  {
    // Sustainability
    cardChoose: {
      "sustainability ": ["mission", "processing", "materials", "packaging", "product care", "our suppliers"],

    },
    images: [{ url: "/navigationPics/pic9.jpg"},{ url: "/navigationPics/pic10.jpg"}]
  }
]


export const navLinks =  ["Collection", "New In", "Modiweek", "Plus Size", "Sustainability"]

export const FilteringItem = [
  {
    type: "sort",
    title: "Sort By",
    items: [
      { label: "Newest", value: "newest" },
      { label: "Price: Low to High", value: "price_asc" },
      { label: "Price: High to Low", value: "price_desc" },
      { label: "Best Selling", value: "best_selling" },
      { label: "Top Rated", value: "top_rated" }
    ]
  },
  {
    type: "size",
    title: "Size",
    items: [
      { label: "XS / US (0-4)", value: "xs" },
      { label: "S / US (4-6)", value: "s" },
      { label: "M / US (6-8)", value: "m" },
      { label: "L / US (8-10)", value: "l" },
      { label: "XL / US (10-12)", value: "xl" }
    ]
  },
  {
    type: "color",
    title: "Color",
    items: [
      { label: "White", value: "#FFFFFF" },
      { label: "Black", value: "#000000" },
      { label: "Red", value: "#FF0000" },
      { label: "Blue", value: "#0000FF" },
      { label: "Green", value: "#008000" },
      { label: "Beige", value: "#F5F5DC" },
      { label: "Gray", value: "#808080" }
    ]
  },
  {
    type: "fabric",
    title: "Fabric",
    items: [
      { label: "Cotton", value: "cotton" },
      { label: "Linen", value: "linen" },
      { label: "Wool", value: "wool" },
      { label: "Silk", value: "silk" },
      { label: "Cashmere", value: "cashmere" },
      { label: "Polyester", value: "polyester" },
      { label: "Denim", value: "denim" },
      { label: "Leather", value: "leather" }
    ]
  },
];