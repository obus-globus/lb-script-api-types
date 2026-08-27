import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EntityScaleData extends Object implements StorableObject {
    constructor()
    // private isBaby: boolean;
    isBaby(): boolean;
    onRemove(): void;
    scale(): number;
    setBaby(arg0: boolean): void;
    setScale(arg0: number): void;
}