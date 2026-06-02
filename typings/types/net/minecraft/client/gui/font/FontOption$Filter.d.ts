import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FontOption } from '../../../../../net/minecraft/client/gui/font/FontOption.d.ts'
export class FontOption$Filter extends Object {
    static ALWAYS_PASS: FontOption$Filter;
    static CODEC: Codec<FontOption$Filter>;
    constructor(values: { [key in FontOption]: boolean })
    // private values: { [key in FontOption]: boolean };
    apply(options: FontOption[]): boolean;
    merge(other: FontOption$Filter): FontOption$Filter;
}