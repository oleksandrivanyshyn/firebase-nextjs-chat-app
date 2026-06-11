'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AvatarGenerator } from 'random-avatar-generator';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');
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
      register
    </div>
  );
};

export default Page;
