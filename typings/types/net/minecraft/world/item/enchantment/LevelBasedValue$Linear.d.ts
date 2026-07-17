import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LevelBasedValue } from '../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
export class LevelBasedValue$Linear extends Record implements LevelBasedValue {
    static CODEC: MapCodec<LevelBasedValue$Linear>;
    static DISPATCH_CODEC: Codec<LevelBasedValue>;
    constructor(base: number, perLevelAboveFirst: number)
    // private base: number;
    // private perLevelAboveFirst: number;
    base(): number;
    calculate(level: number): number;
    codec(): MapCodec<LevelBasedValue$Linear>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    perLevelAboveFirst(): number;
    toString(): string;
}