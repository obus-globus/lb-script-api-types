import type { ArrayBasedShapeGenerator } from '../../../../../com/oracle/truffle/api/staticobject/ArrayBasedShapeGenerator.d.ts'
import type { StaticProperty } from '../../../../../com/oracle/truffle/api/staticobject/StaticProperty.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayBasedStaticShape$ArrayBasedPropertyLayout extends Object {
    constructor(generator: ArrayBasedShapeGenerator<Object>, parentLayout: ArrayBasedStaticShape$ArrayBasedPropertyLayout, staticProperties: StaticProperty[])
    // private generator: ArrayBasedShapeGenerator<Object>;
    // private lastOffset: number;
    // private leftoverHoles: number[][];
    // private objectArraySize: number;
    // private primitiveArraySize: number;
    getObjectArraySize(): number;
    getPrimitiveArraySize(): number;
}