'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe2, MessageCircle, Users } from 'lucide-react'

export function BlockPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Globe2 className="h-6 w-6 text-primary" />
            </div>
            <span className="font-semibold text-xl">TranslateChat</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              className="text-sm font-medium text-gray-600 hover:text-gray-900" 
              href="#features"
              scroll={false}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">
              Solutions
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">
              Pricing
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">
              About Us
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">
              Log In
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start For Free
            </Button>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Break Language Barriers
          <span className="block text-primary mt-2">In Real Time</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-12">
          Connect and communicate effortlessly across languages with our AI-powered messaging platform. 
          Experience instant, accurate translations that make global conversations feel natural and seamless.
        </p>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-lg">
          Start Chatting Now
        </Button>
        <div className="mt-16 rounded-2xl border-8 border-black/10 shadow-2xl mx-auto max-w-4xl overflow-hidden bg-white">
          <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0" />
                    <div className="bg-gray-100 rounded-2xl p-3 text-sm text-left">
                      {"Hello! How are you today?"}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 flex-row-reverse">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex-shrink-0" />
                    <div className="bg-primary/10 rounded-2xl p-3 text-sm text-left">
                      {"¡Hola! ¡Muy bien, gracias!"}
                      <div className="text-xs text-gray-500 mt-1">
                        {"Translated from: Hi! Very well, thank you!"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-5 w-5 text-primary" />
                    <div className="h-4 w-2/3 bg-primary/20 rounded" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/20" />
                      <div className="text-sm">English</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/20" />
                      <div className="text-sm">Español</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/20" />
                      <div className="text-sm">中文</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="h-4 w-1/2 bg-primary/20 rounded mb-3" />
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-primary/10 rounded" />
                    <div className="h-3 w-5/6 bg-primary/10 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="features" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Powerful Translation Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Translation</h3>
                <p className="text-gray-600">
                  Instant message translation in over 100 languages, powered by advanced AI technology.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Group Chats</h3>
                <p className="text-gray-600">
                  Multi-language group conversations where everyone can speak their preferred language.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Globe2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cultural Context</h3>
                <p className="text-gray-600">
                  AI-powered translations that understand and preserve cultural nuances and context.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}