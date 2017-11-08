import * as React from "react";
import "./AddMatch.css";
const reactRouter = require("react-router-dom");
let { withRouter} = reactRouter;

import { PlayerModel } from "../../models/player";

interface Props
{
    history: any;
    players: PlayerModel[];
    addMatch: Function;
}

class AddMatch extends React.Component<Props> {

    public players: PlayerModel[];
    public loading: boolean = true;
    public winnerId: string;
    public loserId: string;

    constructor(props: Props)
    {
        super(props);
    }

    public componentDidMount()
    {
        this.loading = false;
    }

    public async addMatch(): Promise<void>
    {
        this.props.addMatch(this.winnerId, this.loserId);
        this.props.history.push("/matches");
    }

    public updateMatchWinner(e: any)
    {
        this.winnerId = e.target.value;
    }

    public updateMatchLoser(e: any)
    {
        this.loserId = e.target.value;
    }

    render() {

        return (
            <div className="AddMatch">
                <h1>Add a Match</h1>

                {this.loading ? <div>Loading...</div> :

                <div className="match-container">
                    <div className="columns">
                        <div className="column">
                            <select
                                name="winner"
                                id="winner-selection"
                                onChange={this.updateMatchWinner.bind(this)}
                                value={this.winnerId}
                            >
                                {this.props.players.map(player =>
                                    <option key={player.id} value={player.id}>{player.name}</option>)}
                            </select>
                        </div>
                        <button onClick={this.addMatch.bind(this)}>ADD MATCH!</button>
                        <div className="column">
                            <select
                                name="loser"
                                id="loser-selection"
                                onChange={this.updateMatchLoser.bind(this)}
                                value={this.loserId}
                            >
                                {this.props.players.map(player =>
                                    <option key={player.id} value={player.id}>{player.name}</option>)}
                            </select>
                        </div>
                    </div>
                </div>}

            </div>
        );
    }
}

export default withRouter(AddMatch);
