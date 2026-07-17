import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LevelBasedValue } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
export class LevelBasedValue$Clamped extends Record implements LevelBasedValue {
    static CODEC: MapCodec<LevelBasedValue$Clamped>;
    static DISPATCH_CODEC: Codec<LevelBasedValue>;
    constructor(value: LevelBasedValue, min: number, max: number)
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