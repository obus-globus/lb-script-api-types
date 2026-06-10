import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LevelBasedValue } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { LevelBasedValue$Constant } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue$Constant.d.ts'
import type { LevelBasedValue$Linear } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue$Linear.d.ts'
export class LevelBasedValue$Lookup extends Record implements LevelBasedValue {
    static CODEC: Codec<LevelBasedValue>;
    static CODEC: MapCodec<LevelBasedValue$Lookup>;
    static DISPATCH_CODEC: Codec<LevelBasedValue>;
    static bootstrap(paramregistry: MapCodec<LevelBasedValue>[]): MapCodec<LevelBasedValue>;
    static constant(paramvalue: number): LevelBasedValue$Constant;
    static lookup(paramvalues: number[], paramfallback: LevelBasedValue): LevelBasedValue$Lookup;
    static perLevel(paramperLevel: number): LevelBasedValue$Linear;
    static perLevel(parambase: number, paramperLevelAboveFirst: number): LevelBasedValue$Linear;
    constructor(values: number[], fallback: LevelBasedValue)
    // private fallback: LevelBasedValue;
    // private values: number[];
    calculate(level: number): number;
    codec(): MapCodec<LevelBasedValue$Lookup>;
    equals(o: Object | null): boolean;
    fallback(): LevelBasedValue;
    hashCode(): number;
    toString(): string;
    values(): number[];
}