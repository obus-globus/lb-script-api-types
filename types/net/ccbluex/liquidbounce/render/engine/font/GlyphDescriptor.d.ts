import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphPage } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage.d.ts'
import type { GlyphRenderInfo } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphRenderInfo.d.ts'
export class GlyphDescriptor extends Object {
    constructor(page: GlyphPage, renderInfo: GlyphRenderInfo)
    readonly page: GlyphPage;
    readonly renderInfo: GlyphRenderInfo;
}