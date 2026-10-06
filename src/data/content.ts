export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "karahi",
    label: "Karahi Specials",
    items: [
      { name: "Chicken Karahi (Full)", description: "Tender chicken cooked in a rich tomato & ginger gravy", price: "Rs. 2,100" },
      { name: "Mutton Karahi (Full)", description: "Slow-cooked mutton in traditional karahi masala", price: "Rs. 3,400" },
      { name: "Karahi Gosht Special", description: "House special with extra desi ghee & green chilies", price: "Rs. 3,800" },
      { name: "Paneer Karahi", description: "Fresh cottage cheese in spicy tomato gravy", price: "Rs. 1,650" },
    ],
  },
  {
    id: "bbq",
    label: "BBQ & Grill",
    items: [
      { name: "Seekh Kebab (6 pcs)", description: "Minced beef skewers grilled over charcoal", price: "Rs. 950" },
      { name: "Chicken Tikka (Half)", description: "Marinated chicken grilled to smoky perfection", price: "Rs. 850" },
      { name: "Malai Boti", description: "Creamy, mildly spiced chicken skewers", price: "Rs. 1,050" },
      { name: "Bihari Kebab", description: "Thin beef slices marinated in Bihari spices", price: "Rs. 1,150" },
    ],
  },
  {
    id: "biryani",
    label: "Biryani & Rice",
    items: [
      { name: "Sindhi Biryani", description: "Aromatic basmati rice layered with spiced chicken", price: "Rs. 650" },
      { name: "Beef Biryani", description: "Classic biryani with tender beef chunks", price: "Rs. 700" },
      { name: "Plain Pulao", description: "Light, fragrant rice with whole spices", price: "Rs. 450" },
      { name: "Kabuli Pulao", description: "Rice with beef, carrots, raisins & nuts", price: "Rs. 750" },
    ],
  },
  {
    id: "drinks",
    label: "Beverages & More",
    items: [
      { name: "Kashmiri Chai", description: "Pink tea topped with pistachios", price: "Rs. 300" },
      { name: "Doodh Patti", description: "Classic Pakistani milk tea", price: "Rs. 200" },
      { name: "Fresh Lassi", description: "Sweet or salted yogurt drink", price: "Rs. 350" },
      { name: "Tandoori Naan", description: "Fresh baked bread from the clay oven", price: "Rs. 90" },
    ],
  },
];

export interface Testimonial {
  name: string;
  area: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Raza",
    area: "DHA Phase 6, Karachi",
    quote:
      "Best karahi in Karachi, hands down! The flavors remind me of my grandmother's cooking. We order every weekend for the family.",
    rating: 5,
  },
  {
    name: "Sana Khan",
    area: "Clifton, Karachi",
    quote:
      "Amazing BBQ and super friendly staff. The ambiance is perfect for family dinners. Highly recommend the Malai Boti!",
    rating: 5,
  },
  {
    name: "Bilal Siddiqui",
    area: "Gulshan-e-Iqbal, Karachi",
    quote:
      "We catered our office event through them and everyone loved the biryani. Professional service and on-time delivery.",
    rating: 4,
  },
  {
    name: "Ayesha Malik",
    area: "North Nazimabad, Karachi",
    quote:
      "Authentic taste, hygienic kitchen and reasonable prices. This is now our go-to spot for Pakistani food in the city.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Do you offer home delivery across Karachi?",
    a: "Yes! We deliver across most areas of Karachi including DHA, Clifton, Gulshan, North Nazimabad and Gulistan-e-Johar within 45 minutes.",
  },
  {
    q: "Can I book a table for a large family gathering?",
    a: "Absolutely. Use our reservation form below or call us directly — we accommodate groups of up to 40 guests with advance notice.",
  },
  {
    q: "Do you provide catering for events?",
    a: "Yes, we cater weddings, corporate events and private parties. Contact us for a custom menu and quote.",
  },
  {
    q: "What are your operating hours?",
    a: "We are open daily from 12:00 PM to 1:00 AM, including public holidays.",
  },
];
