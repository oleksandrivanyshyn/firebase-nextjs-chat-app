'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AvatarGenerator } from 'random-avatar-generator';
import avatarPlaceholder from '@/../public/file.svg';
import Link from 'next/link';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(avatarPlaceholder);
  const router = useRouter();
  const generateRandomAvatar = () => {
    const avatarGenerator = new AvatarGenerator();
    return avatarGenerator.generateRandomAvatar();
  };
  const handleRefreshAvatar = () => {
    setAvatarUrl(generateRandomAvatar());
  };
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors: Record<string, string> = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };
  useEffect(() => {
    setAvatarUrl(generateRandomAvatar());
  }, []);
  return (
    <div className="flex justify-center items-center h-screen p-10 m-2">
      <form className="space-y-4 w-full max-w-2xl shadow-lg p-10">
        <h1 className="text-xl text-center font-semibold text-[#0b3a65ff]">
          Chat<span className="font-bold text-[#eeab63ff]">2</span>Chat
        </h1>
        <div className="flex items-center space-y-2 justify-between border border-gray-200 p-2">
          <img
            src={avatarUrl}
            alt="Avatar"
            className=" rounded-full h-20 w-20"
          />
          <button
            type="button"
            className="btn btn-outline"
            onClick={handleRefreshAvatar}
          >
            New Avatar
          </button>
        </div>
        {/*name*/}
        <div>
          <label className="label">
            <span className="text-base label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>
        {/*email*/}
        <div>
          <label className="label">
            <span className="text-base label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="w-full input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>

        {/*password*/}
        <div>
          <label className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
        </div>

        {/*confirm password*/}
        <div>
          <label className="label">
            <span className="text-base label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full input input-bordered"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword}</span>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-block bg-[#0b3a65ff] text-white"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              'Sign Up'
            )}
          </button>
          <span>
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Page;
