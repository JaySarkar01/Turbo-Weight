'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { signIn, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
const Login = () => {
  const { data: session, status } = useSession();
  const router= useRouter();
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);  // Track if it's sign up or login
  const formRef = useRef(null);

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/adminbackend/customer')
      }
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, [status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if required fields are filled in
    if (!mobileNumber || !password || (isSignUp && !name)) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    
    // Prepare the data based on the form type (Login/SignUp)
    const data = isSignUp
      ? { name, mobileNumber, password }  // Sign-up data
      : { redirect:false,mobileNumber, password };       // Login data
  
    try {
      // API endpoint for Login or Sign-Up
      if(isSignUp){
        const url ='/api/auth/signup'  // Replace with your actual sign-up 
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }
  
      // Handle success (e.g., storing tokens, redirecting the user, etc.)
      console.log('Response:', result);
      
      // Redirect or update state upon success
        // Redirect to login page or show success message
        console.log('Sign-up successful! Please log in.');
        setIsSignUp(false);  // Optionally toggle to login after successful sign-up
        return
      }else{
        const result= await signIn('credentials', data)
        if(result?.error){
          setError(result.error)
        }else{
          router.push('/adminbackend/customer');
        }
      }
      
    } catch (error:any) {
      setError(error.message || 'Something went wrong');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div
        ref={formRef}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg transition-all duration-500"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-600">Mobile Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <div className="text-center mt-4">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-blue-500 hover:text-blue-700"
          >
            {isSignUp ? 'Already have an account? Login' : 'New user? Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
