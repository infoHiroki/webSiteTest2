'use client';

import React, { useState, useRef, FormEvent, ChangeEvent } from 'react';

type FormData = {
  position: string;
  name: string;
  email: string;
  message: string;
  file?: File | null;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

export default function CareerFormClient() {
  const [formData, setFormData] = useState<FormData>({
    position: 'Webエンジニア',
    name: '',
    email: '',
    message: '',
    file: null,
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // エラーをクリア
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({});
    
    try {
      // FormDataオブジェクトを作成
      const submitData = new FormData();
      submitData.append('position', formData.position);
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);
      
      if (formData.file) {
        submitData.append('file-upload', formData.file);
      }
      
      const response = await fetch('/api/careers', {
        method: 'POST',
        body: submitData,
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: result.message || '応募ありがとうございます。担当者からご連絡いたします。',
        });
        
        // フォームをリセット
        setFormData({
          position: 'Webエンジニア',
          name: '',
          email: '',
          message: '',
          file: null,
        });
        
        // ファイル入力をリセット
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || '送信に失敗しました。後ほど再度お試しください。',
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'エラーが発生しました。後ほど再度お試しください。',
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitStatus.message && (
        <div
          className={`p-4 rounded-md ${
            submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      
      <div>
        <label htmlFor="position" className="block text-sm font-medium text-gray-700">
          希望職種<span className="text-red-500">*</span>
        </label>
        <select
          id="position"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option>Webエンジニア</option>
          <option>ITコンサルタント</option>
          <option>その他</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          お名前<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
            errors.name ? 'border-red-300' : ''
          }`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          メールアドレス<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
            errors.email ? 'border-red-300' : ''
          }`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>
      
      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
          履歴書・職務経歴書
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>ファイルをアップロード</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="sr-only"
                  accept=".pdf,.doc,.docx"
                />
              </label>
              <p className="pl-1">またはドラッグ＆ドロップ</p>
            </div>
            <p className="text-xs text-gray-500">PDF, DOC, DOCX (10MB以下)</p>
            {formData.file && (
              <p className="text-sm text-indigo-600">
                選択したファイル: {formData.file.name} ({Math.round(formData.file.size / 1024)} KB)
              </p>
            )}
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          メッセージ
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        ></textarea>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isSubmitting
              ? 'bg-indigo-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          }`}
        >
          {isSubmitting ? '送信中...' : '応募する'}
        </button>
      </div>
    </form>
  );
} 