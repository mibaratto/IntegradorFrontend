import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import{
    LoginPage,
    SignupPage,
    PostsPage,
    PostWithCommentsPage
}from '../pages';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage />} /> 
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/post/:id" element={<PostWithCommentsPage />} />
            </Routes>
        </BrowserRouter>
    )
}
