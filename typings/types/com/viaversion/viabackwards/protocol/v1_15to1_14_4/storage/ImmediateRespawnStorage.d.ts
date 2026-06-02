import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ImmediateRespawnStorage extends Object implements StorableObject {
    constructor()
    readonly immediateRespawn: boolean;
    isImmediateRespawn(): boolean;
    onRemove(): void;
    setImmediateRespawn(arg0: boolean): void;
}