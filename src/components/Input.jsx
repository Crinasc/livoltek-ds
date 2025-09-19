import React from 'react';

const Input = ({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'w-full px-3 py-2 bg-white border border-black/16 rounded text-base font-normal leading-6 text-black/40 placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200';
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const combinedClasses = `${baseClasses} ${disabledClasses} ${className}`.trim();

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    />
  );
};

export default Input;
