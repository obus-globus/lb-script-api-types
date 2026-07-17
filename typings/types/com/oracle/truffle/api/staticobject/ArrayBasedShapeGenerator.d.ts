import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ShapeGenerator } from '../../../../../com/oracle/truffle/api/staticobject/ShapeGenerator.d.ts'
import type { StaticProperty } from '../../../../../com/oracle/truffle/api/staticobject/StaticProperty.d.ts'
import type { StaticShape } from '../../../../../com/oracle/truffle/api/staticobject/StaticShape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayBasedShapeGenerator<T extends unknown> extends ShapeGenerator<T> {
    private constructor(generatedStorageClass: Class<Object>, generatedFactoryClass: Class<T>)
    private constructor(generatedStorageClass: Class<Object>, generatedFactoryClass: Class<T>, byteArrayOffset: number, objectArrayOffset: number, shapeOffset: number)
    // private byteArrayOffset: number;
    // private generatedFactoryClass: Class<T>;
    // private generatedStorageClass: Class<Object>;
    // private objectArrayOffset: number;
    // private shapeOffset: number;
    generateShape(parentShape: StaticShape<T>, staticProperties: JavaMap<string, StaticProperty>, safetyChecks: boolean, storageClassName: string): StaticShape<T>;
    getByteArrayOffset(): number;
    getObjectArrayOffset(): number;
    getShapeOffset(): number;
    patchOffsets(nativeByteArrayOffset: number, nativeObjectArrayOffset: number, nativeShapeOffset: number): void;
}