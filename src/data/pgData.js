const pgData = [

  // 🔵 PUNE
  { id: 1, city: "Pune", area: "Baner", name: "Baner Premium PG", price: 11000, gender: "Unisex", type: "Working",
    img: "https://source.unsplash.com/400x300/?bedroom", rating: 4.5, occupancy: "Single / Double" },

  { id: 2, city: "Pune", area: "Wakad", name: "Wakad Co-Living", price: 8500, gender: "Male", type: "Students",
    img: "https://source.unsplash.com/400x300/?hostel", rating: 4.2, occupancy: "Triple" },

  { id: 3, city: "Pune", area: "Hinjewadi", name: "Hinjewadi Tech PG", price: 8000, gender: "Male", type: "Working",
    img: "https://source.unsplash.com/400x300/?room", rating: 4.3, occupancy: "Double" },

  { id: 4, city: "Pune", area: "Kothrud", name: "Kothrud Student PG", price: 7500, gender: "Male", type: "Students",
    img: "https://source.unsplash.com/400x300/?shared-room", rating: 4.0, occupancy: "Triple" },

  { id: 5, city: "Pune", area: "Viman Nagar", name: "Viman Elite PG", price: 9500, gender: "Unisex", type: "Working",
    img: "https://source.unsplash.com/400x300/?apartment", rating: 4.6, occupancy: "Single / Double" },

  { id: 6, city: "Pune", area: "Kharadi", name: "Kharadi Residency PG", price: 9000, gender: "Female", type: "Working",
    img: "https://source.unsplash.com/400x300/?modern-room", rating: 4.4, occupancy: "Double" },

  { id: 7, city: "Pune", area: "Magarpatta", name: "Magarpatta Living PG", price: 10500, gender: "Unisex", type: "Working",
    img: "https://source.unsplash.com/400x300/?interior", rating: 4.5, occupancy: "Single" },

  { id: 8, city: "Pune", area: "Hadapsar", name: "Hadapsar Comfort PG", price: 8200, gender: "Male", type: "Students",
    img: "https://source.unsplash.com/400x300/?pg-room", rating: 4.1, occupancy: "Triple" },

  { id: 9, city: "Pune", area: "Balewadi", name: "Balewadi Luxury PG", price: 12000, gender: "Female", type: "Working",
    img: "https://source.unsplash.com/400x300/?luxury-room", rating: 4.7, occupancy: "Single" },

  { id: 10, city: "Pune", area: "Shivaji Nagar", name: "Shivaji Nagar PG", price: 7800, gender: "Male", type: "Students",
    img: "https://source.unsplash.com/400x300/?student-room", rating: 4.0, occupancy: "Double" },


  // 🔵 MUMBAI
  { id: 11, city: "Mumbai", area: "Andheri", name: "Andheri Comfort PG", price: 14000, gender: "Unisex", type: "Working",
    img: "https://source.unsplash.com/400x300/?city-room", rating: 4.5, occupancy: "Single / Double" },

  { id: 12, city: "Mumbai", area: "Bandra", name: "Bandra Elite PG", price: 18000, gender: "Female", type: "Working",
    img: "https://source.unsplash.com/400x300/?premium-room", rating: 4.8, occupancy: "Single" },

  { id: 13, city: "Mumbai", area: "Powai", name: "Powai Lake PG", price: 15000, gender: "Unisex", type: "Working",
    img: "https://source.unsplash.com/400x300/?lake-view-room", rating: 4.6, occupancy: "Double" },

  { id: 14, city: "Mumbai", area: "Dadar", name: "Dadar Central PG", price: 13000, gender: "Male", type: "Students",
    img: "https://source.unsplash.com/400x300/?compact-room", rating: 4.2, occupancy: "Triple" },

  { id: 15, city: "Mumbai", area: "Ghatkopar", name: "Ghatkopar PG", price: 12000, gender: "Male", type: "Working",
    img: "https://source.unsplash.com/400x300/?apartment-room", rating: 4.3, occupancy: "Double" },


  // 🔵 BANGALORE
  { id: 16, city: "Bangalore", area: "Whitefield", name: "Whitefield Tech PG", price: 10000, gender: "Male", type: "Working",
    img: "https://source.unsplash.com/400x300/?tech-room", rating: 4.3, occupancy: "Double" },

  { id: 17, city: "Bangalore", area: "Koramangala", name: "Koramangala Nest PG", price: 13500, gender: "Unisex", type: "Students",
    img: "https://source.unsplash.com/400x300/?co-living", rating: 4.5, occupancy: "Triple" },

  { id: 18, city: "Bangalore", area: "Indiranagar", name: "Indiranagar Premium PG", price: 15000, gender: "Female", type: "Working",
    img: "https://source.unsplash.com/400x300/?modern-apartment", rating: 4.7, occupancy: "Single" },


  // 🔵 HYDERABAD
  { id: 19, city: "Hyderabad", area: "Hitech City", name: "Hitech City PG", price: 9500, gender: "Male", type: "Working",
    img: "https://source.unsplash.com/400x300/?city-hostel", rating: 4.2, occupancy: "Double" },

  { id: 20, city: "Hyderabad", area: "Gachibowli", name: "Gachibowli Comfort PG", price: 11500, gender: "Female", type: "Working",
    img: "https://source.unsplash.com/400x300/?comfort-room", rating: 4.4, occupancy: "Single / Double" },


  // 🔵 DELHI
  { id: 21, city: "Delhi", area: "Saket", name: "Saket Residency PG", price: 12000, gender: "Unisex", type: "Working",
    img: "https://source.unsplash.com/400x300/?residential-room", rating: 4.3, occupancy: "Double" },

  { id: 22, city: "Delhi", area: "Karol Bagh", name: "Karol Bagh PG", price: 8500, gender: "Male", type: "Students",
    img: "https://source.unsplash.com/400x300/?budget-room", rating: 4.0, occupancy: "Triple" },


  // 🔵 OTHER CITIES
  { id: 23, city: "Nagpur", area: "Sitabuldi", name: "Sitabuldi PG", price: 7000, gender: "Male", type: "Students",
    img: "https://source.unsplash.com/400x300/?simple-room", rating: 3.9, occupancy: "Triple" },

  { id: 24, city: "Nashik", area: "College Road", name: "College Road PG", price: 6500, gender: "Unisex", type: "Students",
    img: "https://source.unsplash.com/400x300/?student-hostel", rating: 4.0, occupancy: "Double" },

  { id: 25, city: "Thane", area: "Ghodbunder", name: "Ghodbunder PG", price: 9500, gender: "Male", type: "Working",
    img: "https://source.unsplash.com/400x300/?urban-room", rating: 4.2, occupancy: "Double" },

  { id: 26, city: "Navi Mumbai", area: "Vashi", name: "Vashi PG", price: 10000, gender: "Unisex", type: "Working",
    img: "https://source.unsplash.com/400x300/?flat-room", rating: 4.3, occupancy: "Single / Double" },

];

export default pgData;