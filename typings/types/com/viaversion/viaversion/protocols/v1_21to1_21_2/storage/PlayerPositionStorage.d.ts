import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PlayerPositionStorage$PlayerPosition } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/storage/PlayerPositionStorage$PlayerPosition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlayerPositionStorage extends Object {
    constructor()
    // private captureNextPlayerPositionPacket: boolean;
    // private pendingPongs: (Object | null)[];
    readonly playerPosition: PlayerPositionStorage$PlayerPosition;
    checkCaptureNextPlayerPositionPacket(): boolean;
    checkHasPlayerPosition(): boolean;
    checkPong(arg0: number): boolean;
    reset(): void;
    sendMovePlayerPosRot(arg0: UserConnection): void;
    sendPing(arg0: UserConnection, arg1: number): void;
    setPlayerPosition(arg0: PlayerPositionStorage$PlayerPosition): void;
}