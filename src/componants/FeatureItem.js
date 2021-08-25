
function FeatureItem({source,alt,title,description}){
console.log(source)
    return (
        <div className="feature-item">
          <img src={source} alt={alt} className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>{description}</p>
        </div>
      );
}
  
export default FeatureItem