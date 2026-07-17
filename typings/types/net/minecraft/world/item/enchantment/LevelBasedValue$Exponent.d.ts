import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LevelBasedValue } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
export class LevelBasedValue$Exponent extends Record implements LevelBasedValue {
    static CODEC: MapCodec<LevelBasedValue$Exponent>;
    static DISPATCH_CODEC: Codec<LevelBasedValue>;
    constructor(base: LevelBasedValue, power: LevelBasedValue)
    // private base: LevelBasedValue;
    // private power: LevelBasedValue;
    base(): LevelBasedValue;
    calculate(level: number): number;
    codec(): MapCodec<LevelBasedValue$Exponent>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    power(): LevelBasedValue;
    toString(): string;
}