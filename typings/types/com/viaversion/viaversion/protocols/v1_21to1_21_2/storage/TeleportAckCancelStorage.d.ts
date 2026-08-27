import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TeleportAckCancelStorage extends Object {
    constructor()
    // private cancelNextPlayerPositionPacket: boolean;
    // private cancelTeleportIds: (Object | null)[];
    cancelTeleportId(arg0: number): void;
    checkShouldCancelPlayerPositionPacket(): boolean;
    checkShouldCancelTeleportAck(arg0: number): boolean;
}