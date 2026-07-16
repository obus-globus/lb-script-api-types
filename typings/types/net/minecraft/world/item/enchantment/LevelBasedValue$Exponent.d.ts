import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LevelBasedValue } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { LevelBasedValue$Constant } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue$Constant.d.ts'
import type { LevelBasedValue$Linear } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue$Linear.d.ts'
import type { LevelBasedValue$Lookup } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue$Lookup.d.ts'
export class LevelBasedValue$Exponent extends Record implements LevelBasedValue {
    static CODEC: MapCodec<LevelBasedValue$Exponent>;
    static DISPATCH_CODEC: Codec<LevelBasedValue>;
    static bootstrap(paramregistry: MapCodec<LevelBasedValue>[]): MapCodec<LevelBasedValue>;
    static constant(paramvalue: number): LevelBasedValue$Constant;
    static lookup(paramvalues: number[], paramfallback: LevelBasedValue): LevelBasedValue$Lookup;
    static perLevel(paramperLevel: number): LevelBasedValue$Linear;
    static perLevel(parambase: number, paramperLevelAboveFirst: number): LevelBasedValue$Linear;
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