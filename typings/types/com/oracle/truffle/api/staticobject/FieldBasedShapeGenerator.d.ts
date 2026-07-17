import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { GeneratorClassLoaders } from '../../../../../com/oracle/truffle/api/staticobject/GeneratorClassLoaders.d.ts'
import type { ShapeGenerator } from '../../../../../com/oracle/truffle/api/staticobject/ShapeGenerator.d.ts'
import type { StaticProperty } from '../../../../../com/oracle/truffle/api/staticobject/StaticProperty.d.ts'
import type { StaticShape } from '../../../../../com/oracle/truffle/api/staticobject/StaticShape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FieldBasedShapeGenerator<T extends unknown> extends ShapeGenerator<T> {
    private constructor(gcls: GeneratorClassLoaders, storageSuperClass: Class<Object>, storageFactoryInterface: Class<T>)
    // private gcls: GeneratorClassLoaders;
    // private storageFactoryInterface: Class<T>;
    // private storageSuperClass: Class<Object>;
    generateShape(parentShape: StaticShape<T>, staticProperties: JavaMap<string, StaticProperty>, safetyChecks: boolean, storageClassName: string): StaticShape<T>;
}