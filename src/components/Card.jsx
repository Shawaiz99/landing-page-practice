import PropTypes from 'prop-types';

function Card({src, titleName, text}) {
  return (
    <div className="col-sm-6 col-md-3">
      <div className="card">
        <img
          className="card-img-top"
          src={src}
          alt="Image"
        />
        <div className="card-body">
          <h5 className="card-title">{titleName}</h5>
          <p className="card-text">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  titleName: 'Default',
  text: 'Default',
  src: 'https://picsum.photos/200'
}

// Card.propTypes = {
//   titleName: PropTypes.string
// }


export default Card;