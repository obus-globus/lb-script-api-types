import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class LightPredicate extends Record {
    static CODEC: Codec<LightPredicate>;
    constructor(composite: MinMaxBounds$Ints)
    // private composite: MinMaxBounds$Ints;
    composite(): MinMaxBounds$Ints;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(level: ServerLevel, pos: BlockPos): boolean;
    toString(): string;
}