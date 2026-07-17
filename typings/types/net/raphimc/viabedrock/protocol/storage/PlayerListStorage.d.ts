import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Pair } from '../../../../../com/viaversion/viaversion/util/Pair.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PlayerListStorage extends Object implements StorableObject {
    constructor()
    // private playerList: JavaMap<UUID, Pair<number, string>>;
    addPlayer(arg0: UUID, arg1: number, arg2: string): Pair<number, string>;
    containsPlayer(arg0: UUID): boolean;
    getPlayer(arg0: UUID): Pair<number, string>;
    getPlayer(arg0: number): Pair<UUID, string>;
    onRemove(): void;
    removePlayer(arg0: UUID): Pair<number, string>;
}