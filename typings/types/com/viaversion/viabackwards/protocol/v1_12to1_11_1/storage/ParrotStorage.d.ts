import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ParrotStorage extends Object implements StorableObject {
    constructor()
    readonly sitting: boolean;
    readonly tamed: boolean;
    isSitting(): boolean;
    isTamed(): boolean;
    onRemove(): void;
    setSitting(arg0: boolean): void;
    setTamed(arg0: boolean): void;
}