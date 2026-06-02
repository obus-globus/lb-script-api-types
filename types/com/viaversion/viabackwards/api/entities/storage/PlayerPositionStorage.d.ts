import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PlayerPositionStorage extends Object implements StorableObject {
    constructor()
    readonly x: number;
    readonly y: number;
    readonly z: number;
    addRelativePosition(arg0: number, arg1: number, arg2: number): void;
    onRemove(): void;
    setPosition(arg0: number, arg1: number, arg2: number): void;
    setX(arg0: number): void;
    setY(arg0: number): void;
    setZ(arg0: number): void;
    x(): number;
    y(): number;
    z(): number;
}