import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BlocksAttacks$ItemDamageFunction extends Record {
    static TYPE: Type<BlocksAttacks$ItemDamageFunction>;
    constructor(threshold: number, base: number, factor: number)
    // private base: number;
    // private factor: number;
    // private threshold: number;
    base(): number;
    equals(arg0: Object | null): boolean;
    factor(): number;
    hashCode(): number;
    threshold(): number;
    toString(): string;
}