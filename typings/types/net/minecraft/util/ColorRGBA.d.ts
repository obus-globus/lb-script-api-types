import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ColorRGBA extends Record {
    static CODEC: Codec<ColorRGBA>;
    // private rgba: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    rgba(): number;
    toString(): string;
}