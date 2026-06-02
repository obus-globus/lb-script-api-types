import type { StoredObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
export class ClassicOpLevelStorage extends StoredObject {
    constructor(arg0: UserConnection, arg1: boolean)
    // private flying: boolean;
    // private haxEnabled: boolean;
    // private noClip: boolean;
    readonly opLevel: number;
    // private respawn: boolean;
    // private speed: boolean;
    getOpLevel(): number;
    setOpLevel(arg0: number): void;
    updateAbilities(): void;
    updateHax(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): void;
}