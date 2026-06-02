import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ApplyBonusCount$Formula } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ApplyBonusCount$Formula.d.ts'
export class ApplyBonusCount$FormulaType extends Record {
    private constructor(id: Identifier, codec: Codec<ApplyBonusCount$Formula>)
    // private codec: Codec<ApplyBonusCount$Formula>;
    // private id: Identifier;
    codec(): Codec<ApplyBonusCount$Formula>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
}