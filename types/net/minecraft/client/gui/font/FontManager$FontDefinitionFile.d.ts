import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlyphProviderDefinition$Conditional } from '../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Conditional.d.ts'
export class FontManager$FontDefinitionFile extends Record {
    static CODEC: Codec<FontManager$FontDefinitionFile>;
    private constructor(providers: GlyphProviderDefinition$Conditional[])
    // private providers: GlyphProviderDefinition$Conditional[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    providers(): GlyphProviderDefinition$Conditional[];
    toString(): string;
}