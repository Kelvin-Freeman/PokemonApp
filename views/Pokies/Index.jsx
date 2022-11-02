const React = require("react");
const pokemon = require("../../models/pokemon");

class Index extends React.Component {
  render() {
    return (
      <div style={myStyle}>My First React Component!
        <h1>See All The Pokemon</h1>
       <ul>
        {pokemon.map((pokemon, _id) => (
          <li>
            <a href={`/pokemon/${_id}`}>Pokemon Name</a>{pokemon.name} {pokemon.img}
          </li>
        ))}
        </ul> 

      </div>
    );
  }
}

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
textTransform: 'capitalize'


  };
  


module.exports = Index;


