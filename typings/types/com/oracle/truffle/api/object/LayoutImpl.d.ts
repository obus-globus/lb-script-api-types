import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { LayoutImpl$LayoutInfo } from '../../../../../com/oracle/truffle/api/object/LayoutImpl$LayoutInfo.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LayoutImpl extends Object {
    constructor(clazz: Class<DynamicObject>, layoutInfo: LayoutImpl$LayoutInfo, allowedImplicitCasts: number)
    // private allowedImplicitCasts: number;
    // private clazz: Class<DynamicObject>;
    // private objectFields: FieldInfo[];
    // private primitiveFields: FieldInfo[];
    getObjectField(index: number): FieldInfo;
    getObjectFieldCount(): number;
    getPrimitiveField(index: number): FieldInfo;
    getPrimitiveFieldCount(): number;
    getType(): Class<DynamicObject>;
    hasPrimitiveExtensionArray(): boolean;
    isAllowedIntToDouble(): boolean;
    isAllowedIntToLong(): boolean;
    newShape(objectType: Object, sharedData: Object, flags: number, constantObjectAssumption: Assumption): Shape;
    toString(): string;
}