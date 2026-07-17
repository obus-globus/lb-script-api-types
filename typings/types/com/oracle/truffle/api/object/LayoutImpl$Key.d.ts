import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LayoutImpl$Key extends Record {
    constructor(type: Class<DynamicObject>, implicitCastFlags: number)
    // private implicitCastFlags: number;
    // private type: Class<DynamicObject>;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    implicitCastFlags(): number;
    toString(): string;
    type(): Class<DynamicObject>;
}