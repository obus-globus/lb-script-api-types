import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
export class NormalNoise$NoiseParameters extends Record {
    static CODEC: Codec<Holder<NormalNoise$NoiseParameters>>;
    static DIRECT_CODEC: Codec<NormalNoise$NoiseParameters>;
    constructor(firstOctave: number, amplitudes: (Object | null)[])
    constructor(firstOctave: number, firstAmplitude: number, ...amplitudes: number[])
    constructor(firstOctave: number, amplitudes: number[])
    // private amplitudes: (Object | null)[];
    // private firstOctave: number;
    amplitudes(): (Object | null)[];
    equals(o: Object | null): boolean;
    firstOctave(): number;
    hashCode(): number;
    toString(): string;
}