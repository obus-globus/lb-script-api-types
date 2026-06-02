import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LevelBasedValue } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { LevelBasedValue$Constant } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue$Constant.d.ts'
import type { LevelBasedValue$Linear } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue$Linear.d.ts'
import type { LevelBasedValue$Lookup } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue$Lookup.d.ts'
export class LevelBasedValue$Fraction extends Record implements LevelBasedValue {
    static CODEC: Codec<LevelBasedValue>;
    static CODEC: MapCodec<LevelBasedValue$Fraction>;
    static DISPATCH_CODEC: Codec<LevelBasedValue>;
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    static constant(paramvalue: number): LevelBasedValue$Constant;
    static lookup(paramvalues: number[], paramfallback: LevelBasedValue): LevelBasedValue$Lookup;
    static perLevel(paramperLevel: number): LevelBasedValue$Linear;
    static perLevel(parambase: number, paramperLevelAboveFirst: number): LevelBasedValue$Linear;
    constructor(numerator: LevelBasedValue, denominator: LevelBasedValue)
    // private denominator: LevelBasedValue;
    // private numerator: LevelBasedValue;
    calculate(level: number): number;
    codec(): MapCodec<LevelBasedValue$Fraction>;
    denominator(): LevelBasedValue;
    equals(o: Object | null): boolean;
    hashCode(): number;
    numerator(): LevelBasedValue;
    toString(): string;
}