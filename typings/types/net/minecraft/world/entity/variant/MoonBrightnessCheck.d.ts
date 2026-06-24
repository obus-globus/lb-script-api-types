import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../../net/minecraft/advancements/predicates/MinMaxBounds$Doubles.d.ts'
import type { SpawnCondition } from '../../../../../net/minecraft/world/entity/variant/SpawnCondition.d.ts'
import type { SpawnContext } from '../../../../../net/minecraft/world/entity/variant/SpawnContext.d.ts'
export class MoonBrightnessCheck extends Record implements SpawnCondition {
    static CODEC: Codec<SpawnCondition>;
    static MAP_CODEC: MapCodec<MoonBrightnessCheck>;
    constructor(range: MinMaxBounds$Doubles)
    // private range: MinMaxBounds$Doubles;
    codec(): MapCodec<MoonBrightnessCheck>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    range(): MinMaxBounds$Doubles;
    test(context: SpawnContext): boolean;
    toString(): string;
}