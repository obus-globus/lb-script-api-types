import type { GlyphInfo } from '../../../../../../com/mojang/blaze3d/font/GlyphInfo.d.ts'
import type { NativeImage } from '../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { GlyphStitcher } from '../../../../../../net/minecraft/client/gui/font/GlyphStitcher.d.ts'
import type { BakedSheetGlyph } from '../../../../../../net/minecraft/client/gui/font/glyphs/BakedSheetGlyph.d.ts'
export class SpecialGlyphs extends Enum<SpecialGlyphs> implements GlyphInfo {
    static MISSING: SpecialGlyphs;
    static WHITE: SpecialGlyphs;
    static simple(paramadvance: number): GlyphInfo;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SpecialGlyphs;
    static values(): SpecialGlyphs[];
    private constructor(image: () => NativeImage)
    // private image: NativeImage;
    bake(stitcher: GlyphStitcher): BakedSheetGlyph;
    getAdvance(bold: boolean): number;
    getAdvance(): number;
    getBoldOffset(): number;
    getShadowOffset(): number;
    name(): "WHITE" | "MISSING";
}