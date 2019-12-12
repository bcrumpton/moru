import React from 'react'

function Release (props) {
  return (
    <div className="release-box columns">
      <div className="column is-two-thirds">
        <img className="release-box__cover" src={props.albumCover} alt={props.albumAlt} />
      </div>
      <div className="column is-one-third">
        <p className="release-box__name">{props.name}</p>
        <p className="release-box__label">{props.label}</p>
        <div className="release-box__spotify">
          <iframe title="Album spotify embed" src={props.spotifyEmbed} width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Release