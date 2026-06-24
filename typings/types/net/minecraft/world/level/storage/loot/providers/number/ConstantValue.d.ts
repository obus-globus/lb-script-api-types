import type { Codec } from '../../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { NumberProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class ConstantValue extends Record implements NumberProvider {
    static INLINE_CODEC: Codec<ConstantValue>;
    static MAP_CODEC: MapCodec<ConstantValue>;
    static exactly(paramvalue: number): ConstantValue;
    constructor(value: number)
    // private value: number;
    codec(): MapCodec<ConstantValue>;
    equals(o: Object | null): boolean;
    getFloat(random: LootContext): number;
    getInt(context: LootContext): number;
    hashCode(): number;
    toString(): string;
    value(): number;
}