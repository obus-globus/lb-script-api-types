import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { PlayerMessageSignature } from '../../../../../../com/viaversion/viaversion/api/minecraft/PlayerMessageSignature.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReceivedMessagesStorage extends Object implements StorableObject {
    constructor()
    // private signatures: PlayerMessageSignature[];
    // private size: number;
    // private unacknowledged: number;
    add(arg0: PlayerMessageSignature): void;
    lastSignatures(): PlayerMessageSignature[];
    onRemove(): void;
    resetUnacknowledgedCount(): void;
    tickUnacknowledged(): number;
}