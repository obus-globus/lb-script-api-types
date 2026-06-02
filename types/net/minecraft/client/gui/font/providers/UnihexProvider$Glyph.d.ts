import type { GlyphInfo } from '../../../../../../com/mojang/blaze3d/font/GlyphInfo.d.ts'
import type { UnbakedGlyph } from '../../../../../../com/mojang/blaze3d/font/UnbakedGlyph.d.ts'
import type { UnbakedGlyph$Stitcher } from '../../../../../../com/mojang/blaze3d/font/UnbakedGlyph$Stitcher.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BakedGlyph } from '../../../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
import type { UnihexProvider$LineData } from '../../../../../../net/minecraft/client/gui/font/providers/UnihexProvider$LineData.d.ts'
export class UnihexProvider$Glyph extends Record implements UnbakedGlyph {
    // private contents: UnihexProvider$LineData;
    // private left: number;
    // private right: number;
    bake(stitcher: UnbakedGlyph$Stitcher): BakedGlyph;
    contents(): UnihexProvider$LineData;
    equals(o: Object | null): boolean;
    hashCode(): number;
    info(): GlyphInfo;
    left(): number;
    right(): number;
    toString(): string;
    width(): number;
}