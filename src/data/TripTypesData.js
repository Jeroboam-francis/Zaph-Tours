import Honeymoon from "../assets/Honeymoon.jpg";
import Family from "../assets/Family.jpg";
import Adventure from "../assets/Adventure.jpg";
import Cultural from "../assets/Cultural.jpg";
import Wildlife from "../assets/Wildlife.jpg";
import EcoTour from "../assets/EcoTour.jpg";
import Luxury from "../assets/Luxury.jpg";
import Beach from "../assets/Beach.jpg";
import Wellness from "../assets/Wellness.jpg";
import Culinary from "../assets/Culinary.jpg";

import HoneymoonImg1 from "../assets/Honeymoon-1.jpg";
import HoneymoonImg2 from "../assets/Honeymoon-2.jpg";
import HoneymoonImg3 from "../assets/Honeymoon-3.jpg";

import FamilyImg1 from "../assets/Family-1.jpg";
import FamilyImg2 from "../assets/Family-2.jpg";
import FamilyImg3 from "../assets/Family-3.jpg";

import AdventureImg1 from "../assets/Adventure-1.jpg";
import AdventureImg2 from "../assets/Adventure-2.jpg";
import AdventureImg3 from "../assets/Adventure-3.jpg";

import CulturalImg1 from "../assets/Cultural-1.jpg";
import CulturalImg2 from "../assets/Cultural-2.jpg";
import CulturalImg3 from "../assets/Cultural-3.jpg";

import WildlifeImg1 from "../assets/Wildlife-1.jpg";
import WildlifeImg2 from "../assets/Wildlife-2.jpg";
import WildlifeImg3 from "../assets/Wildlife-3.jpg";

import EcoTourImg1 from "../assets/EcoTour-1.jpg";
import EcoTourImg2 from "../assets/EcoTour-2.jpg";
import EcoTourImg3 from "../assets/EcoTour-3.jpg";

import LuxuryImg1 from "../assets/Luxury-1.jpg";
import LuxuryImg2 from "../assets/Luxury-2.jpg";
import LuxuryImg3 from "../assets/Luxury-3.jpg";

import BeachImg1 from "../assets/Beach-1.jpg";
import BeachImg2 from "../assets/Beach-2.jpg";
import BeachImg3 from "../assets/Beach-3.jpg";

import WellnessImg1 from "../assets/Wellness-1.jpg";
import WellnessImg2 from "../assets/Wellness-2.jpg";
import WellnessImg3 from "../assets/Wellness-3.jpg";

import CulinaryImg1 from "../assets/Culinary-1.jpg";
import CulinaryImg2 from "../assets/Culinary-2.jpg";
import CulinaryImg3 from "../assets/Culinary-3.jpg";

const TripTypesData = [
  {
    id: "honeymoon",
    title: "Romantic Escapes",
    category: "Honeymoon",
    images: [Honeymoon, HoneymoonImg1, HoneymoonImg2, HoneymoonImg3],
    description:
      "Begin your journey together with our exclusive honeymoon packages designed for romance and relaxation. Each destination offers private experiences, luxurious accommodations, and personalized service to make your honeymoon truly unforgettable. Our honeymoon specialists ensure every detail is perfect, from surprise champagne celebrations to romantic dinners under the stars.",
    pricing: "Starting from $2,999 per couple",
    specialOffer:
      "Complimentary couples massage and romantic dinner when booking 7+ nights",
  },
  {
    id: "family",
    title: "Family Adventures",
    category: "Family",
    images: [Family, FamilyImg1, FamilyImg2, FamilyImg3],
    description:
      "Create lasting memories with our family-friendly packages designed to engage travelers of all ages. Our family packages include accommodations with connecting rooms or family suites, child-friendly activities, and experienced guides who know how to make history and nature exciting for younger travelers. Enjoy the perfect balance of adventure, education, and relaxation with itineraries that keep everyone happy.",
    pricing: "Starting from $3,499 for a family of four",
    specialOffer: "Kids under 12 stay and eat free at select resorts",
  },
  {
    id: "adventure",
    title: "Thrill Seekers",
    category: "Adventure",
    images: [Adventure, AdventureImg1, AdventureImg2, AdventureImg3],
    description:
      "Push your limits with our adrenaline-pumping adventure packages. Designed for the bold traveler, these journeys take you off the beaten path and into the heart of the world's most exciting landscapes. From scaling mountain peaks to navigating raging rivers, our experienced guides ensure your safety while delivering maximum thrills. Each package includes quality equipment, expert instruction, and unforgettable experiences.",
    pricing: "Starting from $2,499 per person",
    specialOffer:
      "15% discount on equipment rentals when booking any adventure package",
  },
  {
    id: "cultural",
    title: "Heritage Explorations",
    category: "Cultural Tours",
    images: [Cultural, CulturalImg1, CulturalImg2, CulturalImg3],
    description:
      "Immerse yourself in the rich tapestry of global cultures with our in-depth heritage tours. Led by knowledgeable local guides, these journeys take you beyond tourist attractions to authentic cultural experiences. Participate in traditional ceremonies, learn ancestral crafts, and engage with community members to gain a deeper understanding of diverse ways of life. Each tour is designed to provide respectful cultural exchange and meaningful connections.",
    pricing: "Starting from $1,999 per person",
    specialOffer:
      "Complimentary traditional cooking class with select packages",
  },
  {
    id: "wildlife",
    title: "Natural Wonders",
    category: "Wildlife Safaris",
    images: [Wildlife, WildlifeImg1, WildlifeImg2, WildlifeImg3],
    description:
      "Witness the majesty of wildlife in their natural habitats with our expertly guided safari packages. From the plains of Africa to the jungles of Asia, our wildlife tours prioritize animal welfare and conservation while providing unforgettable encounters. Travel in comfortable 4x4 vehicles with experienced trackers and naturalists who know exactly where and when to spot elusive species. Each package includes premium accommodation, photography tips, and conservation education.",
    pricing: "Starting from $3,299 per person",
    specialOffer:
      "Donation to wildlife conservation included with every booking",
  },
  {
    id: "eco",
    title: "Sustainable Journeys",
    category: "Eco-Tours",
    images: [EcoTour, EcoTourImg1, EcoTourImg2, EcoTourImg3],
    description:
      "Travel with purpose on our eco-conscious tours designed to minimize environmental impact while maximizing authentic experiences. Stay in certified sustainable accommodations, participate in conservation projects, and learn about environmental preservation from dedicated experts. Our eco-tours support local communities and protect natural resources while providing unique access to some of the world's most pristine environments.",
    pricing: "Starting from $2,199 per person",
    specialOffer: "Tree planting ceremony included with each booking",
  },
  {
    id: "luxury",
    title: "Premium Indulgence",
    category: "Luxury Vacations",
    images: [Luxury, LuxuryImg1, LuxuryImg2, LuxuryImg3],
    description:
      "Experience the pinnacle of travel luxury with our meticulously curated premium packages. From VIP airport transfers to personal concierge service, every aspect of your journey is designed for comfort and exclusivity. Stay in world-class accommodations, enjoy priority access to attractions, and savor gourmet dining experiences. Our luxury specialists anticipate your every need, ensuring a seamless and sophisticated travel experience.",
    pricing: "Starting from $5,999 per person",
    specialOffer: "Complimentary room upgrade and private airport transfers",
  },
  {
    id: "beach",
    title: "Coastal Retreats",
    category: "Beach Holidays",
    images: [Beach, BeachImg1, BeachImg2, BeachImg3],
    description:
      "Escape to paradise with our beach holiday packages featuring the world's most beautiful coastal destinations. Whether you seek active water sports adventures or tranquil relaxation on pristine shores, our beach packages deliver the perfect combination of sun, sand, and sea. Choose from family-friendly resorts with extensive activities or secluded boutique properties for more intimate escapes.",
    pricing: "Starting from $1,899 per person",
    specialOffer: "Free sunset cruise with 5+ night bookings",
  },
  {
    id: "wellness",
    title: "Rejuvenation Escapes",
    category: "Wellness Retreats",
    images: [Wellness, WellnessImg1, WellnessImg2, WellnessImg3],
    description:
      "Restore balance to body and mind with our comprehensive wellness retreats. Combining expert-led fitness activities, nutritious cuisine, and rejuvenating spa treatments, these packages are designed to leave you feeling renewed and revitalized. Our wellness programs cater to all levels, from beginners to dedicated practitioners, with personalized attention from qualified wellness professionals.",
    pricing: "Starting from $2,799 per person",
    specialOffer:
      "Complimentary wellness consultation and personalized program",
  },
  {
    id: "culinary",
    title: "Gastronomic Journeys",
    category: "Culinary Tours",
    images: [Culinary, CulinaryImg1, CulinaryImg2, CulinaryImg3],
    description:
      "Tantalize your taste buds with our food-focused travel experiences showcasing the world's most delicious destinations. Learn cooking techniques from local chefs, explore bustling markets for fresh ingredients, and enjoy exclusive dining experiences at renowned restaurants. Each culinary tour is crafted to provide authentic flavor experiences while revealing the cultural significance behind regional cuisines.",
    pricing: "Starting from $2,599 per person",
    specialOffer: "Complimentary cookbook featuring recipes from your journey",
  },
];

export default TripTypesData;
