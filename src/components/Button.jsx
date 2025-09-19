import React from 'react';

const Button = ({ 
  variant = 'primary', 
  state = 'default', 
  children, 
  onClick,
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-2 py-1 rounded-md text-base font-normal leading-6 tracking-[-0.5px] transition-colors duration-200';
  
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
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const combinedClasses = `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`.trim();

  return (
    <button
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
