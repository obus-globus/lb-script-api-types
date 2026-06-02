import type { PlayerPositionStorage } from '../../../../../../com/viaversion/viabackwards/api/entities/storage/PlayerPositionStorage.d.ts'
import type { PlayerStorage$PlayerInput } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_2to1_21/storage/PlayerStorage$PlayerInput.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
export class PlayerStorage extends PlayerPositionStorage {
    constructor()
    // private lastInput: PlayerStorage$PlayerInput;
    // private pitch: number;
    readonly playerCommandTrackedSneaking: boolean;
    readonly playerCommandTrackedSprinting: boolean;
    // private prevX: number;
    // private prevY: number;
    // private prevZ: number;
    // private yaw: number;
    pitch(): number;
    setPlayerCommandTrackedSneaking(arg0: boolean): void;
    setPlayerCommandTrackedSprinting(arg0: boolean): void;
    setRotation(arg0: number, arg1: number): void;
    setSneaking(arg0: boolean): boolean;
    tick(arg0: UserConnection): void;
    yaw(): number;
}