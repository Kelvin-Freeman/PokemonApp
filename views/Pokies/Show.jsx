const React = require('react')

class Show extends React.Component{

    render() {
        const {pokemon} = this.props
        return (
          <div >My First React Component!
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.img} alt="" />
           
    
          </div>
        );
      }
}

module.exports = Show

