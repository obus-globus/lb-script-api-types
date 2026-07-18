import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { LayoutStrategy } from '../../../../../com/oracle/truffle/api/object/LayoutStrategy.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LayoutImpl$Key extends Record {
    constructor(type: Class<DynamicObject>, implicitCastFlags: number, strategy: LayoutStrategy)
    // private implicitCastFlags: number;
    // private strategy: LayoutStrategy;
    // private type: Class<DynamicObject>;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    implicitCastFlags(): number;
    strategy(): LayoutStrategy;
    toString(): string;
    type(): Class<DynamicObject>;
}