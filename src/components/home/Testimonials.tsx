"use client";

import { useState, useEffect } from "react";
import { Star, Quote, Plus, X, CheckCircle, ExternalLink } from "lucide-react";
import { supabase, type Tables, type InsertDto } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";

type Review = Tables<"reviews">;

// Google Maps search link — replace with direct Google Review link once you create a Google Business Profile
const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=Flamingo+Airbnb+Kabarnet&hl=en";

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Form state
  const [authorName, setAuthorName] = useState("");
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fetchReviews = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .eq("is_approved", true)
      .order("created_at", { ascending: false })
      .limit(6);

    if (data) {
      setReviews(data as Review[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !content) return;

    setSubmitting(true);
    const payload: InsertDto<"reviews"> = {
      author_name: authorName,
      rating,
      content,
    };

    const { error } = await supabase
      .from("reviews")
      .insert(payload as never);

    setSubmitting(false);

    if (!error) {
      // Show thank-you screen inside the modal
      setSubmitted(true);
      setAuthorName("");
      setRating(5);
      setContent("");
      // Re-fetch so the new review (is_approved=true by default) appears
      await fetchReviews();
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset submitted state after modal closes
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Google Reviews Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-[var(--color-border)] rounded-2xl px-6 py-4 shadow-sm"
      >
        <div className="flex items-center gap-3">
          {/* Google G Icon */}
          <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div>
            <p className="font-semibold text-[var(--color-primary)] text-sm">Love your stay?</p>
            <p className="text-xs text-[var(--color-text-muted)]">Help future guests find us — leave a Google Review!</p>
          </div>
        </div>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#4285F4] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3367d6] transition-colors shrink-0 shadow"
        >
          <ExternalLink className="w-4 h-4" />
          Leave a Google Review
        </a>
      </motion.div>
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
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full hover:bg-[var(--color-accent)] transition-colors font-medium shadow-lg"
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
                    <Star key={i} className={`h-5 w-5 ${i < t.rating ? "fill-[var(--color-accent)] text-[var(--color-accent)]" : "fill-gray-200 text-gray-200"}`} />
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
              onClick={handleCloseModal}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-8 w-full max-w-lg relative z-10 shadow-2xl"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center text-center py-6"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-[var(--color-primary)] mb-2">Thank You!</h3>
                    <p className="text-[var(--color-text-muted)] mb-6">Your review has been submitted and is now live. We truly appreciate your feedback!</p>
                    <div className="space-y-3 w-full">
                      <a
                        href={GOOGLE_REVIEW_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#4285F4] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3367d6] transition-colors w-full"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Also leave a Google Review
                      </a>
                      <button
                        onClick={handleCloseModal}
                        className="w-full text-[var(--color-text-muted)] py-2 text-sm hover:text-[var(--color-primary)] transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
                              <Star className={`w-8 h-8 ${star <= rating ? "fill-[var(--color-accent)] text-[var(--color-accent)]" : "fill-gray-200 text-gray-200 group-hover:fill-gray-300"} transition-colors`} />
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
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
