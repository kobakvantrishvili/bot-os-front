import { FeatureType } from "@/shared/types";
import Feature1 from "@/assets/features-image1.png";
import Feature2 from "@/assets/features-image2.png";
import Feature3 from "@/assets/features-image3.png";

export const featuresArray: Array<FeatureType> = [
  {
    isLeftToRight: true,
    image: Feature1,
    title: (
      <>
        100% AUTOMATED <span className="text-primary-500">BIDDING</span> &{" "}
        <span className="text-primary-500">SNIPING</span>
      </>
    ),
    description:
      "Your key to mastery in NFT trading. Harness the potential of advanced automation for a seamless user journey and unparalleled performance.",
    listItems: [
      "Trait & Rarity Based Snipes and Offers",
      "Last Second Bidding",
      "Instant Bid & Snipe Notifications",
      "Auto-Renewable Listings",
    ],
  },
  {
    isLeftToRight: false,
    image: Feature2,
    title: (
      <>
        <span className="text-primary-500">WALLET MANAGMENT</span> MADE EASY
      </>
    ),
    description:
      "Unlock effortless wallet management. Gain an intuitive experience with powerful tools.",
    listItems: [
      "User-friendly Dashboard Interface",
      "Customizable Watchlists",
      "Trade History Tracking",
    ],
  },
  {
    isLeftToRight: true,
    image: Feature3,
    title: (
      <>
        ADVANCED REAL-TIME <span className="text-primary-500">ANALYTICS</span>
      </>
    ),
    description:
      "Your gateway to precision in NFT trading. Unleash the power of analytical tools for unparalleled insights and informed decisions.",
    listItems: [
      "Price Trend Analysis",
      "Customizable Search Filters",
      "Smart Asset Valuation Metrics",
    ],
  },
];
