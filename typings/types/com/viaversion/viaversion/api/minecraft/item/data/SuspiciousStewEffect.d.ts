import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SuspiciousStewEffect extends Record {
    static ARRAY_TYPE: Type<SuspiciousStewEffect[]>;
    static TYPE: Type<SuspiciousStewEffect>;
    constructor(mobEffect: number, duration: number)
    // private duration: number;
    // private mobEffect: number;
    duration(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    mobEffect(): number;
    toString(): string;
}