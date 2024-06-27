const sampleListings = [
    {
      title: "Elegant Parisian Apartment",
      description: 'Immerse yourself in the elegance of Paris with a stay in this beautifully appointed apartment in the heart of the city.',
      image: 'https://images.unsplash.com/photo-1533423996375-f914ab160932?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 1500,
      location: 'Champs-Élysées, France',
      country: 'France',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Ski-in/Ski-out Chalet',
      description: 'Hit the slopes right from your doorstep with this ski-in/ski-out chalet offering convenient access to world-class skiing.',
      image: 'https://images.unsplash.com/photo-1536494126589-29fadf0d7e3c?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 1200,
      location: 'Mountain Resort, Switzerland',
      country: 'Switzerland',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Historic Castle Stay',
      description: "Live like royalty with a stay in this historic castle dating back centuries, complete with opulent furnishings and sprawling grounds.",
      image: 'https://images.unsplash.com/photo-1449452198679-05c7fd30f416?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 1000,
      location: 'Countryside, Scotland',
      country: 'Scotland',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Coastal Clifftop Retreat',
      description: 'Enjoy stunning panoramic views of the coastline from this secluded clifftop retreat, perfect for romantic getaways.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 2500,
      location: 'Coastal Bluffs, Portugal',
      country: 'Portugal',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Eco-Friendly Treehouse',
      description: "Experience sustainable living in this eco-friendly treehouse nestled among the trees, offering a unique and unforgettable stay.",
      image: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 800,
      location: 'Forest Retreat, Costa Rica',
      country: 'Costa Rica',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Contemporary Urban Loft',
      description: 'Discover urban sophistication in this sleek and stylish loft apartment located in a trendy neighborhood.',
      image: 'https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 2000,
      location: 'Metropolitan Area, Canada',
      country: 'Canada',
      owner: '667a7bca34ad27f020f3d290',
    },
    {
  
      title: 'Rustic Cabin by the Lake',
      description: 'Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      price: 900,
      location: 'Lake Tahoe',
      country: 'United States',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Luxury Penthouse with City Views',
      description: 'Indulge in luxury living with panoramic city views from this stunning penthouse apartment.',
      image: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      price: 3500,
      location: 'Los Angeles',
      country: 'United States',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Ski-In/Ski-Out Chalet',
      description: 'Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.',
      image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      price: 3000,
      location: 'Verbier',
      country: 'Switzerland',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Safari Lodge in the Serengeti',
      description: 'Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.',
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      price: 4000,
      location: 'Serengeti National Park',
      country: 'Tanzania',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Historic Canal House',
      description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: 1800,
      location: 'Amsterdam',
      country: 'Netherlands',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Private Island Retreat',
      description: 'Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.',
      image: 'https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      price: 10000,
      location: 'Fiji',
      country: 'Fiji',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Charming Cottage in the Cotswolds',
      description: 'Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.',
      image: 'https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: 1200,
      location: 'Cotswolds',
      country: 'United Kingdom',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Historic Brownstone in Boston',
      description: 'Step back in time in this elegant historic brownstone located in the heart of Boston.',
      image: 'https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      price: 2200,
      location: 'Boston',
      country: 'United States',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Beachfront Bungalow in Bali',
      description: 'Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.',
      image: 'https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      price: 1800,
      location: 'Bali',
      country: 'Indonesia',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Mountain View Cabin in Banff',
      description: 'Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.',
      image: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      price: 1500,
      location: 'Banff',
      country: 'Canada',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Art Deco Apartment in Miami',
      description: 'Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.',
      image: 'https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      price: 1600,
      location: 'Miami',
      country: 'United States',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Tropical Villa in Phuket',
      description: 'Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.',
      image: 'https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      price: 3000,
      location: 'Phuket',
      country: 'Thailand',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Historic Castle in Scotland',
      description: 'Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.',
      image: 'https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      price: 4000,
      location: 'Scottish Highlands',
      country: 'United Kingdom',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Desert Oasis in Dubai',
      description: 'Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      price: 5000,
      location: 'Dubai',
      country: 'United Arab Emirates',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Rustic Log Cabin in Montana',
      description: 'Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.',
      image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      price: 1100,
      location: 'Montana',
      country: 'United States',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Beachfront Villa in Greece',
      description: 'Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.',
      image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      price: 2500,
      location: 'Mykonos',
      country: 'Greece',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Eco-Friendly Treehouse Retreat',
      description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image: 'https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      price: 750,
      location: 'Costa Rica',
      country: 'Costa Rica',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Colonial Mansion',
      description: 'Step back in time with a stay in this grand colonial mansion boasting period furnishings and sprawling gardens.',
      image: 'https://images.unsplash.com/photo-1557537387-44e067a86282?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 1600,
      location: 'Historic District, India',
      country: 'India',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Mountain Retreat with Hot Springs',
      description: 'Explore the vibrant city of Tokyo from this modern and centrally located apartment.',
      image: 'https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 2000,
      location: 'Mountain Valley, Japan',
      country: 'Japan',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Bohemian Beach Hut',
      description: 'Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.',
      image: 'https://plus.unsplash.com/premium_photo-1664302490195-8928e65ed3a8?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 1200,
      location: 'Surf Town, Australia',
      country: 'Australia',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Rural Farm Stay',
      description: 'Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.',
      image: 'https://images.unsplash.com/photo-1449960276497-6f52103ce9d7?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 6000,
      location: 'Farmland, New Zealand',
      country: 'New Zealand',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Quaint Coastal Cottage',
      description: 'Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.',
      image: 'https://images.unsplash.com/photo-1562182384-08115de5ee97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 4000,
      location: 'Coastal Village, Ireland',
      country: 'Ireland',
      owner: '667a7bca34ad27f020f3d290',
    },
    {

      title: 'Desert Oasis Villa',
      description: 'Escape to the desert and unwind in this luxurious villa oasis surrounded by vast stretches of sand dunes.',
      image: 'https://images.unsplash.com/photo-1652114067335-a0f7d8f9eeff?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 1800,
      location: 'Desert Paradise, United Arab Emirates',
      country: 'United Arab Emirates',
      owner: '667a7bca34ad27f020f3d290',
    }
  ];

  module.exports = { data: sampleListings };
  