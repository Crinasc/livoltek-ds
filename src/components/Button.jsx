import React from 'react';
import { Circle, ChevronDown } from 'lucide-react';

// Componente Button atualizado para sincronizar com Netlify

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
  const baseClasses = 'inline-flex items-center justify-center rounded-[6px] font-normal leading-6 tracking-[-0.5px] transition-colors duration-200'; // Exato do Figma: 6px
  
  const sizeClasses = {
    sm: 'h-6 px-3 text-sm font-semibold leading-5', // 24px height
    md: 'h-7 px-3 text-sm font-semibold leading-5', // 28px height  
    lg: 'h-8 px-3 text-sm font-semibold leading-5', // 32px height
    xl: 'h-9 px-3 text-sm font-semibold leading-5', // 36px height
    '2xl': 'h-10 px-[14px] py-[10px] text-sm font-semibold leading-5', // 40px height - exato do Figma
  };
  
  const variantClasses = {
    primary: {
      default: 'bg-blue-700 text-white hover:bg-blue-800', // Exato do Figma: #1d4ed8
      hover: 'bg-blue-800 text-white',
      disabled: 'bg-neutral-200 text-neutral-400 cursor-not-allowed', // Exato do Figma: #e5e5e5 e #a3a3a3
    },
    secondary: {
      default: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      hover: 'bg-gray-300 text-gray-800',
      disabled: 'bg-neutral-200 text-neutral-400 cursor-not-allowed',
    }
  };

  // Determinar o estado correto (disabled tem prioridade sobre hover)
  const currentState = disabled ? 'disabled' : state;
  const stateClasses = variantClasses[variant]?.[currentState] || variantClasses[variant].default;
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  
  const disabledClasses = disabled ? '' : 'cursor-pointer';
  
  const combinedClasses = `${baseClasses} ${sizeClass} ${stateClasses} ${disabledClasses} ${className}`.trim();

  // Determinar se deve mostrar ícones baseado no Figma
  // No Figma: apenas botões lg+ têm ícones, e apenas iconOnly=true
  const shouldShowIcons = !['sm', 'md'].includes(size);
  
  // Se leadingIcon ou trailingIcon for true, renderizar ícones
  // Se for um elemento React, usar diretamente
  const leftIcon = shouldShowIcons && leadingIcon === true ? <Circle className="w-4 h-4 text-white" /> : (shouldShowIcons && leadingIcon && leadingIcon !== true ? leadingIcon : null);
  const rightIcon = shouldShowIcons && trailingIcon === true ? <ChevronDown className="w-4 h-4 text-white" /> : (shouldShowIcons && trailingIcon && trailingIcon !== true ? trailingIcon : null);

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="mr-[8px]">{leftIcon}</span>} {/* Exato do Figma: 8px gap */}
      {children}
      {rightIcon && <span className="ml-[8px]">{rightIcon}</span>} {/* Exato do Figma: 8px gap */}
    </button>
  );
};

export default Button;
