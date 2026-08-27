import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LoomStorage extends Object implements StorableObject {
    constructor()
    containerId(): number;
    onRemove(): void;
    reset(): void;
    setContainerId(arg0: number): void;
}