import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ColorModifier$BlendToGray extends Record {
    static CODEC: Codec<ColorModifier$BlendToGray>;
    // private brightness: number;
    // private factor: number;
    brightness(): number;
    equals(o: Object | null): boolean;
    factor(): number;
    hashCode(): number;
    toString(): string;
}