import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { Value } from '../../../../../org/objectweb/asm/tree/analysis/Value.d.ts'
export class BasicValue extends Object implements Value {
    static DOUBLE_VALUE: BasicValue;
    static FLOAT_VALUE: BasicValue;
    static INT_VALUE: BasicValue;
    static LONG_VALUE: BasicValue;
    static REFERENCE_VALUE: BasicValue;
    static RETURNADDRESS_VALUE: BasicValue;
    static UNINITIALIZED_VALUE: BasicValue;
    constructor(arg0: Type)
    readonly type: Type;
    equals(arg0: Object | null): boolean;
    getSize(): number;
    getType(): Type;
    hashCode(): number;
    isReference(): boolean;
    toString(): string;
}