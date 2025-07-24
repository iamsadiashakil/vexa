import { LightBulbIcon, ShieldCheckIcon, SparklesIcon, HandshakeIcon } from './Icons';

const CompanyValues = () => {
  const values = [
    {
      icon: LightBulbIcon,
      title: "Innovation",
      description: "We push boundaries and explore new technologies to deliver cutting-edge solutions."
    },
    {
      icon: ShieldCheckIcon,
      title: "Integrity",
      description: "Honest communication and ethical practices guide every project we undertake."
    },
    {
      icon: SparklesIcon,
      title: "Excellence",
      description: "We're committed to delivering exceptional quality in every line of code."
    },
    {
      icon: HandshakeIcon,
      title: "Partnership",
      description: "We view every client relationship as a long-term collaboration."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Core Values</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          The principles that guide our work and define our company culture
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;