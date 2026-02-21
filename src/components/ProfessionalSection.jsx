import { useEffect, useState } from 'react';

const statsSeed = [
  { id: 'customers', title: 'Happy Customers', value: 12000, desc: 'Trusted by customers worldwide.' },
  { id: 'orders', title: 'Orders Delivered', value: 48000, desc: 'Fast, reliable shipping every time.' },
  { id: 'products', title: 'Unique Designs', value: 320, desc: 'Curated, trend-forward collections.' },
];

export default function ProfessionalSection() {
  const [counts, setCounts] = useState(statsSeed.map(() => 0));

  useEffect(() => {
    let start = null;
    const duration = 1200; // ms

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCounts(
        statsSeed.map(s => Math.floor(s.value * progress))
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, []);

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Customers Choose Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">Premium materials, thoughtful design, and service that cares.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsSeed.map((s, idx) => (
            <div key={s.id} className="flex flex-col items-start p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-800 mb-4">
                {/* simple icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="currentColor" />
                  <path d="M6 20v-1c0-2.76 4-4.5 6-4.5s6 1.74 6 4.5V20H6z" fill="currentColor" opacity="0.9" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {s.title}
              </h3>

              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {counts[idx].toLocaleString()}+
              </div>

              <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
