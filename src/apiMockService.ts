import { PlayerModel } from "./models/player";
// import { CreatePlayerCommand } from './models/createPlayerCommand';
import { Match } from "./models/match";
// import { CreateMatchCommand } from './models/createMatchCommand';
import { ScoreboardPlayer } from "./models/scoreboardPlayer";

const mockPlayers: PlayerModel[] = [
    { id: "1", name: "player1", rating: 1505 },
    { id: "2", name: "player2", rating: 1495 },
    { id: "3", name: "player3", rating: 1475 }
];

const mockScoreboardPlayers: ScoreboardPlayer[] = [
    {   player: mockPlayers[0],
        wins: "3",
        losses: "0"
    },
    {   player: mockPlayers[1],
        wins: "2",
        losses: "3"
    },
    {   player: mockPlayers[2],
        wins: "0",
        losses: "5"
    }
];

const mockMatches: Match[] = [
    { id: "1", winnerId: "1", winner: "player1", loserId: "2", loser: "player2" },
    { id: "2", winnerId: "1", winner: "player1", loserId: "2", loser: "player2" },
    { id: "3", winnerId: "2", winner: "player2", loserId: "3", loser: "player3" },
    { id: "4", winnerId: "2", winner: "player2", loserId: "3", loser: "player3" },
];

export default class ApiService
{
    private static latestPlayerId: number = 4;
    private static latestMatchId: number = 5;

    public async getScoreboard(): Promise<ScoreboardPlayer[]>
    {
        return mockScoreboardPlayers;
    }

    public async createPlayer(name: string): Promise<PlayerModel>
    {
        let nextPlayerId = ApiService.latestPlayerId++;
        return { id: nextPlayerId.toString(), name: name, rating: 1500 };
    }

    public async getPlayer(id: string): Promise<PlayerModel | null>
    {
        for (let player of mockPlayers)
        {
            if (player.id === id)
            {
                return player;
            }
        }

        return null;
    }

    public async getPlayers(): Promise<PlayerModel[]>
    {
        return mockPlayers;
    }

    public async createMatch(winnerId: string, loserId: string): Promise<Match>
    {
        let nextMatchId = ApiService.latestMatchId++;
        return { id: nextMatchId.toString(), winnerId: "p1", winner: "player1", loserId: "p2", loser: "player2" };
    }

    public async getMatch(id: string): Promise<Match | null>
    {
        for (let match of mockMatches)
        {
            if (match.id === id)
            {
                return match;
            }
        }

        return null;
    }

    public async getMatches(): Promise<Match[]>
    {
        return mockMatches;
    }

}

