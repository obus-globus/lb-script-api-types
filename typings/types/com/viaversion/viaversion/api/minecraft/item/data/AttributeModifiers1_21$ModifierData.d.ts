import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AttributeModifiers1_21$ModifierData extends Record {
    static TYPE: Type<AttributeModifiers1_21$ModifierData>;
    constructor(id: string, amount: number, operation: number)
    // private amount: number;
    // private id: string;
    // private operation: number;
    amount(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): string;
    operation(): number;
    toString(): string;
}