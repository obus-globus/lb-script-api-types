import type { Dimension } from '../../../../../../java/awt/Dimension.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BoundingBox2f } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/BoundingBox2f.d.ts'
import type { BoundingBox2s } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/BoundingBox2s.d.ts'
export class GlyphAtlasLocation extends Object {
    constructor(pixelBoundingBox: BoundingBox2f, atlasDimensions: Dimension)
    readonly atlasHeight: number;
    readonly atlasWidth: number;
    readonly pixelBoundingBox: BoundingBox2f;
    readonly uvCoordinatesOnTexture: BoundingBox2s;
}