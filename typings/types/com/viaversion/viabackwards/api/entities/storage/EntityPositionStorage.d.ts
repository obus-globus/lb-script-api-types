import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class EntityPositionStorage extends Object {
    constructor()
    // private x: number;
    // private y: number;
    // private z: number;
    addRelativePosition(arg0: number, arg1: number, arg2: number): void;
    setPosition(arg0: number, arg1: number, arg2: number): void;
    x(): number;
    y(): number;
    z(): number;
}