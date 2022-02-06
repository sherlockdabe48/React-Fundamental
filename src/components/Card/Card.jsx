export default function Card({ image, name, link }) {
  return (
    <div className="card">
      <img 
      style={{ width: '40rem' }}
      src={image} 
      alt={name}/>
      <div>
        <p>{name}</p>
        <a href={link}>More {name}..</a>
      </div>
    </div>
  )
}