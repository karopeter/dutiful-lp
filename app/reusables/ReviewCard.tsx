import { Star } from 'lucide-react';
import Img from './Img';

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, rating, review, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] w-[320px] border border-gray-100/50 ${className}`}>
      {/* Avatar and Name */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 bg-[#A073F0] rounded-full flex items-center justify-center flex-shrink-0">
          {/* <span className="text-xl">👩‍💼</span> */}
          <Img
           src="/tola.svg"
           alt="Tola Nation"
           width={63}
           height={63}
          />
        </div>
        <h4 className="font-[500] font-circular text-[#000000] text-[18px] tracking-tight">{name}</h4>
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${i < rating ? 'text-[#FDB022] fill-[#FDB022]' : 'text-gray-200 fill-gray-200'}`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-[#666666] font-circular font-books text-[14px] leading-[1.6]">
        {review}
      </p>
    </div>
  );
};

export default ReviewCard;