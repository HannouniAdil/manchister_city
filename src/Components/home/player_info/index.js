import React, { Component } from "react";
import Stripes from "../../../Resources/images/stripes.png";
import { Tag } from "../../ui/misc";

class PlayInfo extends Component {
  state = {};

  render() {
    return (
      <div
        className="home_meetplayers"
        style={{
          background: `#ffffff url(${Stripes})`
        }}
      >
        <div className="container">
          <div className="home_meetplayers_wrapper">
            <div className="home_card_wrapper">Card</div>
            <div className="home_text_wrapper">
              <div>
                <Tag
                  bck="#0e1731"
                  size="100px"
                  color="#ffffff"
                  add={{ display:'inline-block', marginBottom: '20px' }}
                >
                  Meet
                </Tag>
                <Tag
                  bck="#0e1731"
                  size="100px"
                  color="#ffffff"
                  add={{ display: 'inline-block', marginBottom: '20px' }}
                >
                  The
                  </Tag>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    add={{ display: 'inline-block', marginBottom: '20px' }}
                  >
                  Player
                </Tag>
                <Tag
                    bck="#ffffff"
                    size="27px"
                    color="#0e1731"
                    link={true}
                    linkto="/the_team"
                    add={{
                      display: 'inline-block', marginBottom: '27px', border: '1px solid #0e1731'
                    }}
                  >
                   Let get to know each other 
                  </Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayInfo;
