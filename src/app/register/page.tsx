'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AvatarGenerator } from 'random-avatar-generator';
import avatarPlaceholder from '@/../public/file.svg';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
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
      </form>
    </div>
  );
};

export default Page;
