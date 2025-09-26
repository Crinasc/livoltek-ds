import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Aqui você adicionaria a lógica de login
  };

  return (
    <div className="bg-[rgba(0,0,0,0.1)] relative size-full min-h-screen">
      <div className="absolute bg-white box-border content-stretch flex flex-col gap-[23px] items-end left-1/2 p-[40px] rounded-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[280px]">
        <h1 className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-black">
          Login
        </h1>
        
        <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[200px]">
          <div className="bg-white box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.16)] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.4)] text-nowrap bg-transparent border-none outline-none w-full"
              placeholder="username"
            />
          </div>
          
          <div className="bg-white box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.16)] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.4)] text-nowrap bg-transparent border-none outline-none w-full"
              placeholder="password"
            />
          </div>
          
          <div className="flex flex-col gap-[8px] w-full">
            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="w-fit"
            >
              Confirm
            </Button>
            <Button
              variant="primary"
              size="md"
              className="w-fit"
            >
              Confirm
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="w-fit"
            >
              Confirm
            </Button>
            <Button
              variant="primary"
              size="xl"
              className="w-fit"
            >
              Confirm
            </Button>
            <Button
              variant="primary"
              size="2xl"
              className="w-fit"
            >
              Confirm
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
