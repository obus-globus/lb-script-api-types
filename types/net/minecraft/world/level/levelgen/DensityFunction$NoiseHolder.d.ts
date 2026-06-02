import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { NormalNoise } from '../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
export class DensityFunction$NoiseHolder extends Record {
    static CODEC: Codec<DensityFunction$NoiseHolder>;
    constructor(noiseData: Holder<NormalNoise$NoiseParameters>)
    constructor(noiseData: Holder<NormalNoise$NoiseParameters>, noise: NormalNoise)
    // private noise: NormalNoise;
    // private noiseData: Holder<NormalNoise$NoiseParameters>;
    equals(o: Object | null): boolean;
    getValue(x: number, y: number, z: number): number;
    hashCode(): number;
    maxValue(): number;
    noise(): NormalNoise;
    noiseData(): Holder<NormalNoise$NoiseParameters>;
    toString(): string;
}