import React from 'react';
import { Circle, ChevronDown } from 'lucide-react';

const Button = ({ 
  variant = 'primary', 
  state = 'default',
  size = 'md',
  children, 
  onClick,
  disabled = false,
  className = '',
  leadingIcon = null,
  trailingIcon = null,
  // Propriedades adicionais seguindo padrões Tailwind
  type = 'button',
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
      default: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      hover: 'bg-gray-300 text-gray-800',
    }
  };

  const stateClasses = variantClasses[variant]?.[state] || variantClasses[variant].default;
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const combinedClasses = `${baseClasses} ${sizeClass} ${stateClasses} ${disabledClasses} ${className}`.trim();

  // Determinar quais ícones renderizar
  // Regra: botões sm e md não devem ter ícones
  const shouldShowIcons = !['sm', 'md'].includes(size);
  const leftIcon = shouldShowIcons && leadingIcon === true ? <Circle className="w-4 h-4" /> : (shouldShowIcons ? leadingIcon : null);
  const rightIcon = shouldShowIcons && trailingIcon === true ? <ChevronDown className="w-4 h-4" /> : (shouldShowIcons ? trailingIcon : null);

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
