import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ScoreboardTeamStorage extends Object implements StorableObject {
    constructor()
    // private teams: JavaMap<string, string[]>;
    addPlayerToTeam(arg0: string, arg1: string[]): void;
    createTeam(arg0: string): void;
    getPlayerTeam(arg0: string): string;
    onRemove(): void;
    removeFromTeam(arg0: string, arg1: string): void;
    removeTeam(arg0: string): void;
}