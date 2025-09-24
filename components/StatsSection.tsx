
'use client';
import { useLanguage } from './LanguageContext';

export default function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      id: 1,
      number: '15+',
      label: t('statsExperience'),
      description: t('verifiedBuyersDesc'),
      icon: 'ri-time-line'
    },
    {
      id: 2,
      number: '10,000+',
      label: t('statsClients'),
      description: t('materialTypesDesc'),
      icon: 'ri-user-line'
    },
    {
      id: 3,
      number: '500+',
      label: t('dailyDeals'),
      description: t('dailyDealsDesc'),
      icon: 'ri-map-pin-line'
    },
    {
      id: 4,
      number: '£2M+',
      label: t('statsVolume'),
      description: t('monthlyVolumeDesc'),
      icon: 'ri-bar-chart-line'
    }
  ];

  return (
    <section className="py-20 bg-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('trustedByThousands')}
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            {t('trustedSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <i className={`${stat.icon} text-2xl`}></i>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-purple-200 mb-2">
                {stat.label}
              </div>
              <div className="text-purple-300 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="text-white">
            <div className="text-2xl font-bold mb-1">99.2%</div>
            <div className="text-purple-200 text-sm">{t('successRate')}</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold mb-1">{t('support24')}</div>
            <div className="text-purple-200 text-sm">{t('supportText')}</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold mb-1">{t('statsCountries')}</div>
            <div className="text-purple-200 text-sm">{t('coverageText')}</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold mb-1">{t('experienceYears')}</div>
            <div className="text-purple-200 text-sm">{t('experienceText')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
