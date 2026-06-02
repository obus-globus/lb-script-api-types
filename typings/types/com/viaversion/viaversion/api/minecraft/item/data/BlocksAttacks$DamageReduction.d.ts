import type { HolderSet } from '../../../../../../../com/viaversion/viaversion/api/minecraft/HolderSet.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ArrayType } from '../../../../../../../com/viaversion/viaversion/api/type/types/ArrayType.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BlocksAttacks$DamageReduction extends Record {
    static ARRAY_TYPE: ArrayType<BlocksAttacks$DamageReduction>;
    static TYPE: Type<BlocksAttacks$DamageReduction>;
    // private base: number;
    // private factor: number;
    // private horizontalBlockingAngle: number;
    // private type: HolderSet;
    base(): number;
    equals(arg0: Object | null): boolean;
    factor(): number;
    hashCode(): number;
    horizontalBlockingAngle(): number;
    toString(): string;
    type(): HolderSet;
}