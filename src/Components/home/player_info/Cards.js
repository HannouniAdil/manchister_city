import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import { easePolyOut } from 'd3-ease';
import Otamendi from '../../../Resources/images/players/Otamendi.png';
import PlayerCard from '../../ui/playerCard';


class Cards extends Component {
  state={
    show:this.props.show,
    cards: [
      {
        bottom:90,
        left: 300
      },
      {
        bottom:60,
        left: 200
      },
      {
        bottom:30,
        left: 100
      },
      {
        bottom:0,
        left: 0
      }
    ]
  }

  showPlayerCards = () =>(
    this.state.cards.map((card, i)=>(
      <Animate 
        key={i}
        show={this.state.show}

        start={{
          left:0,
          bottom:0
        }}
        enter={{
          left:[card.left],
          bottom:[card.bottom],
          timing: {duration:1500, ease: easePolyOut}
        }}
      >
        {({left, bottom})=>{
          return(
            <div
            style={{
              position: 'absolute',
              left,
              bottom
            }}
            >
              <PlayerCard 
                namer="30"
                name="Nicolas"
                lastname="Otamendi"
                bck={Otamendi}
              />
            </div>
          )
        }}
      </Animate>
    ))
  )


  render() {
    return (
      <div>
        {this.showPlayerCards()}
      </div>
    );
  }
}

export default Cards;