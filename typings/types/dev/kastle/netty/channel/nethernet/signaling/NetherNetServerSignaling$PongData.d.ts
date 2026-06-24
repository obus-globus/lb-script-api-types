import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NetherNetServerSignaling$PongData extends Record {
    constructor(serverName: string, levelName: string, gameType: number, playerCount: number, maxPlayerCount: number, isEditorWorld: boolean, isHardcore: boolean, transportLayer: number, connectionType: number)
    // private connectionType: number;
    // private gameType: number;
    // private isEditorWorld: boolean;
    // private isHardcore: boolean;
    // private levelName: string;
    // private maxPlayerCount: number;
    // private playerCount: number;
    // private serverName: string;
    // private transportLayer: number;
    connectionType(): number;
    equals(arg0: Object | null): boolean;
    gameType(): number;
    hashCode(): number;
    isEditorWorld(): boolean;
    isHardcore(): boolean;
    levelName(): string;
    maxPlayerCount(): number;
    playerCount(): number;
    serverName(): string;
    toString(): string;
    transportLayer(): number;
}