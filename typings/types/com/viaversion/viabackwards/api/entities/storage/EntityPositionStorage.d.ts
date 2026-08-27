import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class EntityPositionStorage extends Object implements StorableObject {
    constructor()
    // private x: number;
    // private y: number;
    // private z: number;
    addRelativePosition(arg0: number, arg1: number, arg2: number): void;
    onRemove(): void;
    setPosition(arg0: number, arg1: number, arg2: number): void;
    x(): number;
    y(): number;
    z(): number;
}