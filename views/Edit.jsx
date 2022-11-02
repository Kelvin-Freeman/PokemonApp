const React = require('react')

class Edit extends React.Component{

    render() {
        const {pokemon} = this.props
        return (
          <div >My First React Component!
            <h1>Edit the Pokemon</h1>
            
            <form action="/pokemon" method="POST">
            Name: <input type="text" name="name" defaultValue={pokemon.name}/>
            image: <input type="text" name="img" defaultValue={pokemon.img}/>
            <input type="submit" value="edit pokemon"/>
           </form>  
    
          </div>
        );
      }
}

module.exports = Edit

