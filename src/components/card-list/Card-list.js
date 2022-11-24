import { Component } from "react";
import './card-list.styles.css'
import './card.styles.css'
import Card from "./Card";


class CardList extends Component {


    render () {

        const {monsters} = this.props
        return (
            <div className="card-list">
                <Card monsters={monsters}/>
            </div>
            
        )
    }
}


export default CardList;