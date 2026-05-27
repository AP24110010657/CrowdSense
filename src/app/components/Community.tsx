import { useState } from 'react';
import { Users, TrendingUp, MessageCircle, Heart, Share2, Award, Target, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const posts = [
  {
    id: 1,
    user: 'Sarah M.',
    avatar: 'S',
    time: '15 mins ago',
    location: 'Central Mall',
    content: 'Just arrived at Central Mall - crowd level is actually lower than predicted! Great time to shop. 🛍️',
    likes: 24,
    comments: 5,
    helpful: 18,
    verified: true,
  },
  {
    id: 2,
    user: 'Mike R.',
    avatar: 'M',
    time: '1 hour ago',
    location: 'City Stadium',
    content: 'Heads up! Traffic is building up near the stadium. Leave early if you\'re planning to catch the game tonight.',
    likes: 45,
    comments: 12,
    helpful: 38,
    verified: false,
  },
  {
    id: 3,
    user: 'Priya K.',
    avatar: 'P',
    time: '2 hours ago',
    location: 'Tech Hub Cafe',
    content: 'Perfect spot for remote work today! Plenty of seats available and WiFi is great. ☕️',
    likes: 31,
    comments: 8,
    helpful: 25,
    verified: true,
  },
  {
    id: 4,
    user: 'Alex T.',
    avatar: 'A',
    time: '3 hours ago',
    location: 'Downtown Plaza',
    content: 'Warning: Event setup causing major congestion. Alternate routes recommended!',
    likes: 67,
    comments: 15,
    helpful: 54,
    verified: true,
  },
];

const topContributors = [
  { name: 'Emma W.', points: 1250, reports: 45, badge: 'gold' },
  { name: 'James L.', points: 980, reports: 38, badge: 'silver' },
  { name: 'Sofia R.', points: 875, reports: 32, badge: 'bronze' },
];

export function Community() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl text-soft-white mb-2">Community Feed</h1>
          <p className="text-soft-white/60">Real-time updates from fellow CrowdSense users</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Share Update */}
            <div
              className="p-6 rounded-2xl border border-cyan/20 bg-navy/40 backdrop-blur-xl"
              style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.15)' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-cyan/20 border border-cyan/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-cyan" />
                </div>
                <input
                  type="text"
                  placeholder="Share a crowd update with the community..."
                  className="flex-1 px-4 py-3 bg-cyan/5 border border-cyan/20 rounded-xl text-soft-white placeholder-soft-white/40 focus:outline-none focus:ring-2 focus:ring-cyan/50"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-cyan/10 rounded-lg transition-all">
                    <MapPin className="w-5 h-5 text-cyan" />
                  </button>
                  <span className="text-sm text-soft-white/60">Add Location</span>
                </div>
                <button className="px-6 py-2 bg-cyan text-navy rounded-lg hover:scale-105 transition-all">
                  Post
                </button>
              </div>
            </div>

            {/* Posts */}
            {posts.map((post, index) => (
              <PostCard
                key={post.id}
                post={post}
                index={index}
                isLiked={likedPosts.includes(post.id)}
                onLike={() => toggleLike(post.id)}
              />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Overview */}
            <div
              className="p-6 rounded-2xl border border-cyan/20 bg-navy/40 backdrop-blur-xl"
              style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)' }}
            >
              <h3 className="text-lg text-soft-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan" />
                Your Impact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-soft-white/70">Posts Shared</span>
                  <span className="text-lg text-cyan">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-soft-white/70">Helpful Votes</span>
                  <span className="text-lg text-safe-green">48</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-soft-white/70">Community Points</span>
                  <span className="text-lg text-warning-yellow">245</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-cyan/10">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-warning-yellow" />
                  <span className="text-soft-white/70">Level:</span>
                  <span className="text-soft-white">Active Contributor</span>
                </div>
              </div>
            </div>

            {/* Top Contributors */}
            <div
              className="p-6 rounded-2xl border border-cyan/20 bg-navy/40 backdrop-blur-xl"
              style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)' }}
            >
              <h3 className="text-lg text-soft-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-warning-yellow" />
                Top Contributors
              </h3>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-2xl">
                      {index === 0 && '🥇'}
                      {index === 1 && '🥈'}
                      {index === 2 && '🥉'}
                    </div>
                    <div className="flex-1">
                      <div className="text-soft-white">{contributor.name}</div>
                      <div className="text-xs text-soft-white/60">
                        {contributor.reports} reports
                      </div>
                    </div>
                    <div className="text-cyan">{contributor.points}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Guidelines */}
            <div
              className="p-6 rounded-2xl border border-cyan/20 bg-navy/40 backdrop-blur-xl"
              style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)' }}
            >
              <h3 className="text-lg text-soft-white mb-4">Community Guidelines</h3>
              <ul className="space-y-3 text-sm text-soft-white/80">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full mt-1.5" />
                  <span>Share accurate and helpful information</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full mt-1.5" />
                  <span>Be respectful to other community members</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full mt-1.5" />
                  <span>Report spam or inappropriate content</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full mt-1.5" />
                  <span>Earn points by contributing valuable updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostCard({
  post,
  index,
  isLiked,
  onLike,
}: {
  post: any;
  index: number;
  isLiked: boolean;
  onLike: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-6 rounded-2xl border border-cyan/20 bg-navy/40 backdrop-blur-xl hover:border-cyan/30 transition-all"
      style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)' }}
    >
      {/* User Info */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan/40 to-cyan/20 border border-cyan/30 flex items-center justify-center text-soft-white">
          {post.avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-soft-white">{post.user}</span>
            {post.verified && (
              <div className="w-5 h-5 rounded-full bg-cyan/20 border border-cyan/40 flex items-center justify-center">
                <Target className="w-3 h-3 text-cyan" />
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-soft-white/60 mt-1">
            <Clock className="w-3 h-3" />
            {post.time}
            <span>•</span>
            <MapPin className="w-3 h-3" />
            {post.location}
          </div>
        </div>
      </div>

      {/* Content */}
      <p className="text-soft-white/90 mb-4">{post.content}</p>

      {/* Actions */}
      <div className="flex items-center gap-6 pt-4 border-t border-cyan/10">
        <button
          onClick={onLike}
          className={`flex items-center gap-2 transition-all ${
            isLiked ? 'text-alert-red' : 'text-soft-white/60 hover:text-alert-red'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-alert-red' : ''}`} />
          <span className="text-sm">{post.likes + (isLiked ? 1 : 0)}</span>
        </button>

        <button className="flex items-center gap-2 text-soft-white/60 hover:text-cyan transition-all">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">{post.comments}</span>
        </button>

        <button className="flex items-center gap-2 text-soft-white/60 hover:text-cyan transition-all">
          <Share2 className="w-5 h-5" />
        </button>

        <div className="ml-auto flex items-center gap-2 text-safe-green">
          <Target className="w-4 h-4" />
          <span className="text-xs">{post.helpful} found helpful</span>
        </div>
      </div>
    </motion.div>
  );
}
