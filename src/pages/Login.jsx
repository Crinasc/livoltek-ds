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
    <div className="min-h-screen bg-black/10 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-10 w-full max-w-sm shadow-lg">
        <h1 className="text-black text-base font-medium leading-6 mb-6">
          Login
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="space-y-2">
            <Input
              type="text"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="pt-4">
            <Button
              type="submit"
              variant="primary"
              className="w-full"
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
