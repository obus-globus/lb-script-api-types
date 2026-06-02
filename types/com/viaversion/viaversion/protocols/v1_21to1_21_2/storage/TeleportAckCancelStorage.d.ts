import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TeleportAckCancelStorage extends Object implements StorableObject {
    constructor()
    // private cancelNextPlayerPositionPacket: boolean;
    // private cancelTeleportIds: (Object | null)[];
    cancelTeleportId(arg0: number): void;
    checkShouldCancelPlayerPositionPacket(): boolean;
    checkShouldCancelTeleportAck(arg0: number): boolean;
    onRemove(): void;
}