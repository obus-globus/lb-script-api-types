import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Enchantable extends Record {
    static TYPE: Type<Enchantable>;
    constructor(value: number)
    // private value: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    value(): number;
}