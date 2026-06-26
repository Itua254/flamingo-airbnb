"use client";

import { useState, useEffect } from "react";
import { Star, Quote, Plus, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import type { Database } from "@/lib/database.types";

type Review = Database["public"]["Tables"]["reviews"]["Row"];

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Form state
  const [authorName, setAuthorName] = useState("");
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchReviews = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .eq("is_approved", true)
      .order("created_at", { ascending: false })
      .limit(6);
    
    if (data) {
      setReviews(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !content) return;
    
    setSubmitting(true);
    const { data } = await supabase
      .from("reviews")
      .insert({
        author_name: authorName,
        rating,
        content,
        // is_approved is true by default
      })
      .select();

    if (data && data.length > 0) {
      setReviews([data[0], ...reviews].slice(0, 6)); // Add new review and keep max 6
      setIsModalOpen(false);
      setAuthorName("");
      setRating(5);
      setContent("");
    }
    setSubmitting(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--color-primary)] mb-4">Guest Experiences</h2>
          <p className="text-[var(--color-text-muted)] text-lg max-w-2xl">Read what our recent guests have to say about their stay at Flamingo Airbnb.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="hidden md:flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full hover:bg-[var(--color-accent)] transition-colors font-medium shadow-lg shrink-0"
        >
          <Plus className="w-5 h-5" /> Leave a Review
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)]"></div>
        </div>
      ) : reviews.length === 0 ? (
        <div className="bg-gray-50 rounded-3xl p-12 text-center border border-dashed border-gray-300">
          <p className="text-gray-500 mb-4 text-lg">No reviews yet. Be the first to share your experience!</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="md:hidden inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full hover:bg-[var(--color-accent)] transition-colors font-medium shadow-lg"
          >
            <Plus className="w-5 h-5" /> Leave a Review
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {reviews.map((t, index) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-[var(--color-border)] premium-shadow-hover transition-premium relative flex flex-col group overflow-hidden"
              >
                <Quote className="absolute top-8 right-8 h-12 w-12 text-[var(--color-accent)] opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < t.rating ? 'fill-[var(--color-accent)] text-[var(--color-accent)]' : 'fill-gray-200 text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-[var(--color-text-muted)] font-light leading-relaxed mb-8 flex-grow">
                  &quot;{t.content}&quot;
                </p>
                <div>
                  <h4 className="font-serif font-bold text-[var(--color-primary)] text-lg">{t.author_name}</h4>
                  <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                    {new Date(t.created_at).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {reviews.length > 0 && (
        <button 
          onClick={() => setIsModalOpen(true)}
          className="mt-8 w-full md:hidden flex justify-center items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-4 rounded-full hover:bg-[var(--color-accent)] transition-colors font-medium shadow-lg"
        >
          <Plus className="w-5 h-5" /> Leave a Review
        </button>
      )}

      {/* Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-8 w-full max-w-lg relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-serif font-bold text-[var(--color-primary)] mb-6">Share Your Experience</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
                    placeholder="E.g. Sarah M."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="focus:outline-none group"
                      >
                        <Star className={`w-8 h-8 ${star <= rating ? 'fill-[var(--color-accent)] text-[var(--color-accent)]' : 'fill-gray-200 text-gray-200 group-hover:fill-gray-300'} transition-colors`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Review</label>
                  <textarea 
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your stay..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={submitting}
                  className="w-full bg-[var(--color-primary)] text-white py-4 rounded-xl font-medium hover:bg-[var(--color-accent)] transition-colors disabled:opacity-70 flex justify-center items-center shadow-lg"
                >
                  {submitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : "Submit Review"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
