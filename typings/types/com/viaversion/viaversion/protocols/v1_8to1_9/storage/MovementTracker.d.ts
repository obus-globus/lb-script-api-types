import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MovementTracker extends Object implements StorableObject {
    constructor()
    readonly ground: boolean;
    readonly nextIdlePacket: number;
    getNextIdlePacket(): number;
    incrementIdlePacket(): void;
    isGround(): boolean;
    onRemove(): void;
    setGround(arg0: boolean): void;
}