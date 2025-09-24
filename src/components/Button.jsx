import React from 'react';

const Button = ({ 
  variant = 'primary', 
  state = 'default',
  size = 'md',
  children, 
  onClick,
  disabled = false,
  className = '',
  iconLeft = null,
  iconRight = null,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-normal leading-6 tracking-[-0.5px] transition-colors duration-200';
  
  const sizeClasses = {
    sm: 'h-6 px-3 text-sm font-semibold leading-5', // 24px height
    md: 'h-7 px-3 text-sm font-semibold leading-5', // 28px height  
    lg: 'h-8 px-3 text-sm font-semibold leading-5', // 32px height
    xl: 'h-9 px-3 text-sm font-semibold leading-5', // 36px height
    '2xl': 'h-10 px-3 text-sm font-semibold leading-5', // 40px height
  };
  
  const variantClasses = {
    primary: {
      default: 'bg-button-primary text-white hover:bg-button-primary-hover',
      hover: 'bg-button-primary-hover text-white',
    },
    secondary: {
      default: 'bg-button-secondary text-black hover:bg-button-secondary-hover',
      hover: 'bg-button-secondary-hover text-black',
    }
  };

  const stateClasses = variantClasses[variant]?.[state] || variantClasses[variant].default;
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const combinedClasses = `${baseClasses} ${sizeClass} ${stateClasses} ${disabledClasses} ${className}`.trim();

  return (
    <button
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;
