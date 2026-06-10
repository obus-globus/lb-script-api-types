import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LevelBasedValue } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { LevelBasedValue$Constant } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue$Constant.d.ts'
import type { LevelBasedValue$Linear } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue$Linear.d.ts'
import type { LevelBasedValue$Lookup } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue$Lookup.d.ts'
export class LevelBasedValue$Clamped extends Record implements LevelBasedValue {
    static CODEC: Codec<LevelBasedValue>;
    static CODEC: MapCodec<LevelBasedValue$Clamped>;
    static DISPATCH_CODEC: Codec<LevelBasedValue>;
    static bootstrap(paramregistry: MapCodec<LevelBasedValue>[]): MapCodec<LevelBasedValue>;
    static constant(paramvalue: number): LevelBasedValue$Constant;
    static lookup(paramvalues: number[], paramfallback: LevelBasedValue): LevelBasedValue$Lookup;
    static perLevel(paramperLevel: number): LevelBasedValue$Linear;
    static perLevel(parambase: number, paramperLevelAboveFirst: number): LevelBasedValue$Linear;
    // private max: number;
    // private min: number;
    // private value: LevelBasedValue;
    calculate(level: number): number;
    codec(): MapCodec<LevelBasedValue$Clamped>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    max(): number;
    min(): number;
    toString(): string;
    value(): LevelBasedValue;
}