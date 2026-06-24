import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Climate$Parameter } from '../../../../../net/minecraft/world/level/biome/Climate$Parameter.d.ts'
import type { Climate$TargetPoint } from '../../../../../net/minecraft/world/level/biome/Climate$TargetPoint.d.ts'
export class Climate$ParameterPoint extends Record {
    static CODEC: Codec<Climate$ParameterPoint>;
    constructor(temperature: Climate$Parameter, humidity: Climate$Parameter, continentalness: Climate$Parameter, erosion: Climate$Parameter, depth: Climate$Parameter, weirdness: Climate$Parameter, offset: number)
    // private continentalness: Climate$Parameter;
    // private depth: Climate$Parameter;
    // private erosion: Climate$Parameter;
    // private humidity: Climate$Parameter;
    // private offset: number;
    // private temperature: Climate$Parameter;
    // private weirdness: Climate$Parameter;
    continentalness(): Climate$Parameter;
    depth(): Climate$Parameter;
    equals(o: Object | null): boolean;
    erosion(): Climate$Parameter;
    // private fitness(target: Climate$TargetPoint): number;
    hashCode(): number;
    humidity(): Climate$Parameter;
    offset(): number;
    parameterSpace(): Climate$Parameter[];
    temperature(): Climate$Parameter;
    toString(): string;
    weirdness(): Climate$Parameter;
}