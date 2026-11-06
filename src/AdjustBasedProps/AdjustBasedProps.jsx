import { getImageUrl } from '../utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, size < 90 ? 's' :'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function AdjustBasedProps() {
  return (
   <div>
     <Avatar
      size={90}
      person={{
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP'
      }}
    />
    <Avatar
      size={60}
      person={{
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP'
      }}
      />
    <Avatar
      size={40}
      person={{
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP'
      }}
      />
   </div>
  );
}