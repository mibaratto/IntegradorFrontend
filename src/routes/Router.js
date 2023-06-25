import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import{
    LoginPage,
    SignupPage,
    PostsPage,
    PostDetailPage
}from '../pages';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage />} /> 
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/posts/:id" element={<PostDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}
