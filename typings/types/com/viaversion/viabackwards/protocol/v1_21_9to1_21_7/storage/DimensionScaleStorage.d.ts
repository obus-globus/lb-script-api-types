import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DimensionScaleStorage extends Object implements StorableObject {
    constructor()
    // private dimensionScales: { [key: number]: number };
    getScale(arg0: number): number;
    onRemove(): void;
    setScale(arg0: number, arg1: number): void;
}