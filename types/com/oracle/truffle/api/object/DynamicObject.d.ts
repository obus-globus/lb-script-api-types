import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObject extends Object implements TruffleObject {
    constructor(shape: Shape)
    // private extRef: Object[];
    // private extVal: number[];
    readonly shape: Shape;
    // private assertSetShape(s: Shape): boolean;
    clone(): Object;
    getObjectStore(): Object[];
    getPrimitiveStore(): number[];
    getShape(): Shape;
    setObjectStore(newArray: Object[]): void;
    setPrimitiveStore(newArray: number[]): void;
    setShape(shape: Shape): void;
    // private setShapeHelper(shape: Shape, shapeOffset: number): void;
}