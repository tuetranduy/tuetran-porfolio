import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { certifications } from '../../data/certifications';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Achievements"
          title="Certifications"
          description="Professional certifications that validate my expertise in quality assurance and testing."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-slate-800/50 border border-slate-700 rounded-xl card-hover text-center"
            >
              {/* Icon/Logo placeholder */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-slate-800 rounded-full flex items-center justify-center">
                <Award className="text-cyan-400" size={32} />
              </div>

              <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-cyan-400 text-sm mb-1">{cert.issuer}</p>
              <p className="text-slate-500 text-sm mb-4">{cert.date}</p>

              {cert.credentialId && (
                <p className="text-slate-600 text-xs mb-4">
                  ID: {cert.credentialId}
                </p>
              )}

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan-400 text-sm hover:underline"
              >
                View Credential
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note for updating */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          * Update src/data/certifications.js with your actual certifications
        </motion.p>
      </div>
    </section>
  );
};

export default Certifications;
