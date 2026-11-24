export default function Marquee({ items, className = '', reverse = false }) {
  const content = items.map((item, index) => (
    <span className="marquee-item" key={`${item}-${index}`}>
      {item}
      <span className="marquee-star" aria-hidden="true">✳</span>
    </span>
  ))

  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''} ${className}`.trim()} aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-group">{content}</div>
        <div className="marquee-group">{content}</div>
      </div>
    </div>
  )
}
