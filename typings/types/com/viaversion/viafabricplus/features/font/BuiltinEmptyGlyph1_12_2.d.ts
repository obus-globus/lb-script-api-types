import type { GlyphInfo } from '../../../../../com/mojang/blaze3d/font/GlyphInfo.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { GlyphStitcher } from '../../../../../net/minecraft/client/gui/font/GlyphStitcher.d.ts'
import type { BakedSheetGlyph } from '../../../../../net/minecraft/client/gui/font/glyphs/BakedSheetGlyph.d.ts'
export class BuiltinEmptyGlyph1_12_2 extends Enum<BuiltinEmptyGlyph1_12_2> implements GlyphInfo {
    static INSTANCE: BuiltinEmptyGlyph1_12_2;
    static simple(paramadvance: number): GlyphInfo;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BuiltinEmptyGlyph1_12_2;
    static values(): BuiltinEmptyGlyph1_12_2[];
    private constructor()
    bake(arg0: GlyphStitcher): BakedSheetGlyph;
    getAdvance(bold: boolean): number;
    getAdvance(): number;
    getBoldOffset(): number;
    getShadowOffset(): number;
    name(): "INSTANCE";
}