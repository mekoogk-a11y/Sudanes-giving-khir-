import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
  textColor?: string;
  invertWhite?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSlogan = true,
  textColor = 'text-gray-900',
  invertWhite = false,
}) => {
  const sizeMap = {
    sm: { icon: 34, textTitle: 'text-base', textSlogan: 'text-[11px]' },
    md: { icon: 44, textTitle: 'text-lg', textSlogan: 'text-xs' },
    lg: { icon: 54, textTitle: 'text-xl', textSlogan: 'text-sm' },
    xl: { icon: 68, textTitle: 'text-2xl', textSlogan: 'text-base' },
  };

  const dim = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Symbolic SVG Emblem: Seed sprouting into Wheat ears & Green leaves */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          width={dim.icon}
          height={dim.icon}
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:scale-105"
        >
          {/* Subtle circular background halo */}
          <circle cx="40" cy="40" r="38" className={invertWhite ? "fill-white/10 stroke-white/20" : "fill-emerald-50 stroke-emerald-100"} strokeWidth="1.5" />
          
          {/* The Seed at base (Golden Amber) */}
          <path
            d="M40 64C36 64 33 60 34 55C35 50 38 45 40 44C42 45 45 50 46 55C47 60 44 64 40 64Z"
            fill="#D97706"
          />
          {/* Seed detail / inner light */}
          <ellipse cx="40" cy="56" rx="2.5" ry="4" fill="#FBBF24" opacity="0.8" />

          {/* Central Sprout Stem (Deep Green) */}
          <path
            d="M40 46V18"
            stroke="#166534"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Left Wheat Ears / Grains */}
          <path
            d="M39 38C33 36 28 32 30 26C34 26 38 31 39 35"
            fill="#15803D"
          />
          <path
            d="M39 30C32 28 27 23 30 18C34 18 38 23 39 27"
            fill="#16A34A"
          />
          <path
            d="M39 22C34 20 30 16 33 12C36 12 39 16 40 19"
            fill="#EAB308"
          />

          {/* Right Wheat Ears / Grains */}
          <path
            d="M41 38C47 36 52 32 50 26C46 26 42 31 41 35"
            fill="#15803D"
          />
          <path
            d="M41 30C48 28 53 23 50 18C46 18 42 23 41 27"
            fill="#16A34A"
          />
          <path
            d="M41 22C46 20 50 16 47 12C44 12 41 16 40 19"
            fill="#EAB308"
          />

          {/* Crown Wheat Grain at top */}
          <path
            d="M40 16C38 12 39 8 40 6C41 8 42 12 40 16Z"
            fill="#D97706"
          />

          {/* Growth rings / Blessing arcs */}
          <path
            d="M20 46C20 32 30 21 40 21C50 21 60 32 60 46"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeDasharray="2 3"
            opacity="0.5"
          />
        </svg>

        {/* Small gold sparkle badge */}
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-white shadow-sm" />
      </div>

      {/* Brand Names & Slogan */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-bold tracking-tight font-sans ${dim.textTitle} ${
            invertWhite ? 'text-white' : textColor
          }`}
        >
          المنصة السودانية الخيرية
        </span>
        <span
          className={`text-xs ${
            invertWhite ? 'text-emerald-100' : 'text-emerald-800 font-medium'
          }`}
        >
          للمساعدات الفردية
        </span>
        {showSlogan && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span
              className={`font-bold ${dim.textSlogan} tracking-wide ${
                invertWhite ? 'text-amber-300' : 'text-amber-700'
              }`}
            >
              صدقٌ وأمانة
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
