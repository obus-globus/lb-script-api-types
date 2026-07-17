import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LayoutImpl$LayoutInfo extends Object {
    constructor(clazz: Class<DynamicObject>, layoutLookup: MethodHandles$Lookup)
    // private clazz: Class<DynamicObject>;
    // private objectFields: FieldInfo[];
    // private primitiveFields: FieldInfo[];
    toString(): string;
}