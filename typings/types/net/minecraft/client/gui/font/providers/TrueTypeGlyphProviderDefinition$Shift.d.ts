import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TrueTypeGlyphProviderDefinition$Shift extends Record {
    static CODEC: Codec<TrueTypeGlyphProviderDefinition$Shift>;
    static NONE: TrueTypeGlyphProviderDefinition$Shift;
    constructor(x: number, y: number)
    // private x: number;
    // private y: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    x(): number;
    y(): number;
}