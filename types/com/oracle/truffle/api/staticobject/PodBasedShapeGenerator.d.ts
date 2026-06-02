import type { PodBasedStaticShape } from '../../../../../com/oracle/truffle/api/staticobject/PodBasedStaticShape.d.ts'
import type { ShapeGenerator } from '../../../../../com/oracle/truffle/api/staticobject/ShapeGenerator.d.ts'
import type { StaticProperty } from '../../../../../com/oracle/truffle/api/staticobject/StaticProperty.d.ts'
import type { StaticShape } from '../../../../../com/oracle/truffle/api/staticobject/StaticShape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PodBasedShapeGenerator<T extends Object | number | string | boolean> extends ShapeGenerator<T> {
    private constructor(storageSuperClass: Class<Object>, storageFactoryInterface: Class<T>)
    // private storageFactoryInterface: Class<T>;
    // private storageSuperClass: Class<Object>;
    // private generateShape(parentShape: PodBasedStaticShape<T>, staticProperties: { [key: string]: StaticProperty }, safetyChecks: boolean): StaticShape<T>;
    generateShape(parentShape: StaticShape<T>, staticProperties: { [key: string]: StaticProperty }, safetyChecks: boolean, storageClassName: string): StaticShape<T>;
}