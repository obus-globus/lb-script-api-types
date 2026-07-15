import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FontId } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
import type { GlyphDescriptor } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphDescriptor.d.ts'
export class DynamicFontCacheManager$ChangeOnAtlas extends Object {
    constructor(descriptor: GlyphDescriptor, font: FontId, removed: boolean)
    descriptor: GlyphDescriptor;
    font: FontId;
    removed: boolean;
}