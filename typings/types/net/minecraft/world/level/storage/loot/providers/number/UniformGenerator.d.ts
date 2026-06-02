import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { NumberProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class UniformGenerator extends Record implements NumberProvider {
    static MAP_CODEC: MapCodec<UniformGenerator>;
    static between(parammin: number, parammax: number): UniformGenerator;
    constructor(min: NumberProvider, max: NumberProvider)
    // private max: NumberProvider;
    // private min: NumberProvider;
    codec(): MapCodec<UniformGenerator>;
    equals(o: Object | null): boolean;
    getFloat(context: LootContext): number;
    getInt(context: LootContext): number;
    getInt(context: LootContext): number;
    hashCode(): number;
    max(): NumberProvider;
    min(): NumberProvider;
    toString(): string;
    validate(context: ValidationContext): void;
}