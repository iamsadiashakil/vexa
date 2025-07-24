const SectionTitle = ({ subtitle, title, description }) => {
    return (
      <div className="text-center max-w-3xl mx-auto mb-12">
        {subtitle && (
          <span className="text-blue-600 font-semibold block mb-2">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-gray-600 text-lg">{description}</p>
        )}
      </div>
    )
  }
  
  export default SectionTitle