import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LevelBasedValue extends Object{
    calculate(level: number): number;
    codec(): MapCodec<LevelBasedValue>;
}