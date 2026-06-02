import type { GlyphProvider } from '../../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { GlyphProvider$Conditional } from '../../../../../com/mojang/blaze3d/font/GlyphProvider$Conditional.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class FontManager$Preparation extends Record {
    private constructor(fontSets: Map<Identifier, GlyphProvider$Conditional[]>, allProviders: GlyphProvider[])
    // private allProviders: GlyphProvider[];
    // private fontSets: Map<Identifier, GlyphProvider$Conditional[]>;
    allProviders(): GlyphProvider[];
    equals(o: Object | null): boolean;
    fontSets(): Map<Identifier, GlyphProvider$Conditional[]>;
    hashCode(): number;
    toString(): string;
}