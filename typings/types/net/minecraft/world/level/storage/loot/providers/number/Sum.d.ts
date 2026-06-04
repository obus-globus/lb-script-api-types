import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { NumberProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class Sum extends Record implements NumberProvider {
    static MAP_CODEC: MapCodec<Sum>;
    static sum(paramsummands: (Object | null)[]): Sum;
    constructor(summands: NumberProvider[])
    // private summands: NumberProvider[];
    codec(): MapCodec<Sum>;
    equals(o: Object | null): boolean;
    getFloat(context: LootContext): number;
    getInt(context: LootContext): number;
    hashCode(): number;
    summands(): NumberProvider[];
    toString(): string;
    validate(context: ValidationContext): void;
}