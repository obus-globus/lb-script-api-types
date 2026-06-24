import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AttackRange extends Record {
    static TYPE: Type<AttackRange>;
    constructor(minRange: number, maxRange: number, minCreativeRange: number, maxCreativeRange: number, hitboxMargin: number, mobFactor: number)
    // private hitboxMargin: number;
    // private maxCreativeRange: number;
    // private maxRange: number;
    // private minCreativeRange: number;
    // private minRange: number;
    // private mobFactor: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    hitboxMargin(): number;
    maxCreativeRange(): number;
    maxRange(): number;
    minCreativeRange(): number;
    minRange(): number;
    mobFactor(): number;
    toString(): string;
}