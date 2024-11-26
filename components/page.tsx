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
            <Link 
              className="text-sm font-medium text-gray-600 hover:text-gray-900" 
              href="#solutions"
              scroll={false}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Solutions
            </Link>
            <Link 
              className="text-sm font-medium text-gray-600 hover:text-gray-900" 
              href="#pricing"
              scroll={false}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Pricing
            </Link>
            <Link 
              className="text-sm font-medium text-gray-600 hover:text-gray-900" 
              href="#about"
              scroll={false}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
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
        <section id="solutions" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Translation Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Globe2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Business Communication</h3>
                <p className="text-gray-600">
                  Enterprise-grade translation solutions for global teams and international business communications.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
                <p className="text-gray-600">
                  Multilingual customer service solutions that help you support customers in their preferred language.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Educational Tools</h3>
                <p className="text-gray-600">
                  Language learning and translation tools for educational institutions and students.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Free</h3>
                  <div className="text-4xl font-bold mb-2">$0<span className="text-lg text-gray-600">/mo</span></div>
                  <p className="text-gray-600">Perfect for personal use</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <span>Up to 100 messages/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe2 className="h-3 w-3 text-primary" />
                    </div>
                    <span>5 languages</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Get Started</Button>
              </div>
              
              <div className="p-6 bg-primary text-primary-foreground rounded-xl shadow-lg relative">
                <div className="absolute -top-3 right-4 bg-primary-foreground text-primary px-3 py-1 rounded-full text-sm">
                  Popular
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Pro</h3>
                  <div className="text-4xl font-bold mb-2">$29<span className="text-lg opacity-80">/mo</span></div>
                  <p className="opacity-80">For growing businesses</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Users className="h-3 w-3" />
                    </div>
                    <span>Unlimited messages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Globe2 className="h-3 w-3" />
                    </div>
                    <span>50 languages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <MessageCircle className="h-3 w-3" />
                    </div>
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Start Free Trial
                </Button>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-lg">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold mb-2">Custom</div>
                  <p className="text-gray-600">For large organizations</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <span>Unlimited everything</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe2 className="h-3 w-3 text-primary" />
                    </div>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="h-3 w-3 text-primary" />
                    </div>
                    <span>24/7 dedicated support</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              About TranslateChat
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-center mb-8">
                  <div className="h-20 w-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Globe2 className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <p className="text-gray-600 text-lg mb-6 text-center">
                  We're on a mission to break down language barriers and connect people across the globe. Our AI-powered platform makes real-time communication possible in any language.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                    <div className="text-gray-600">Languages Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                    <div className="text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}