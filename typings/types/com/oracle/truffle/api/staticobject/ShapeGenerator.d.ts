import type { StaticProperty } from '../../../../../com/oracle/truffle/api/staticobject/StaticProperty.d.ts'
import type { StaticShape } from '../../../../../com/oracle/truffle/api/staticobject/StaticShape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ShapeGenerator<T extends unknown> extends Object {
    constructor()
    generateShape(parentShape: StaticShape<T>, staticProperties: { [key: string]: StaticProperty }, safetyChecks: boolean, storageClassName: string): StaticShape<T>;
}