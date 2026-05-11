import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { blogPosts } from '../../data/blog';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-slate-950 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Latest Articles"
          title="Blog & Insights"
          description="Sharing knowledge and best practices in test automation and quality engineering."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden card-hover"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                <span className="text-6xl opacity-20">📝</span>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-500 text-slate-900 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            View All Articles
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
