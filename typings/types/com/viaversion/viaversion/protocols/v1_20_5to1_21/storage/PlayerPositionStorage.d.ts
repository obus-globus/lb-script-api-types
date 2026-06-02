import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlayerPositionStorage extends Object implements StorableObject {
    constructor()
    readonly onGround: boolean;
    // private x: number;
    // private y: number;
    // private z: number;
    onGround(): boolean;
    onRemove(): void;
    setOnGround(arg0: boolean): void;
    setPosition(arg0: number, arg1: number, arg2: number): void;
    x(): number;
    y(): number;
    z(): number;
}