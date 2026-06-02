import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NormalNoise$NoiseParameters extends Record {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<NormalNoise$NoiseParameters>;
    // private amplitudes: (Object | null)[];
    // private firstOctave: number;
    amplitudes(): (Object | null)[];
    equals(o: Object | null): boolean;
    firstOctave(): number;
    hashCode(): number;
    toString(): string;
}