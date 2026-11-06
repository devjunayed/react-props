import { getImageUrl } from "../utils";

const EcProfile = ({name, imageId, width, height, profession,noAwards, awards, discovered}) => {
  return (
     <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl({imageId})}
          alt={name}
          width={width}
          height={height}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {noAwards} </b>
            {awards}
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
  )
}

export default EcProfile