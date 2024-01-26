function Location() {
    return (
        <div style={{ height: '300px', width: '100%' }}>
        <iframe
          title="OpenStreetMap"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${107.6094732284546}%2C${-6.885962926014352}%2C${107.62093639373779}%2C${-6.868854214389994}&layer=mapnik&marker=${-6.877408570202181}%2C${107.61469979463256}`}
          allowFullScreen
        ></iframe>
      </div>
    )
}

export default Location;