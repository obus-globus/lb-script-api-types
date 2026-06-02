import type { UnbakedGlyph } from '../../../../../com/mojang/blaze3d/font/UnbakedGlyph.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BakedGlyph } from '../../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
export class FontSet$DelayedBake extends Object implements Supplier<BakedGlyph> {
    private constructor(null_: FontSet$DelayedBake, unbaked: UnbakedGlyph)
    // private baked: BakedGlyph;
    // private unbaked: UnbakedGlyph;
    get(): BakedGlyph;
}