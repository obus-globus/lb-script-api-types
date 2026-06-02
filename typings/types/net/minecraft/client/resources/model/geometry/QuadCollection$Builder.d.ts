import type { ImmutableList$Builder } from '../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Multimap } from '../../../../../../com/google/common/collect/Multimap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BakedQuad } from '../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { QuadCollection } from '../../../../../../net/minecraft/client/resources/model/geometry/QuadCollection.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
export class QuadCollection$Builder extends Object {
    constructor()
    // private culledFaces: Multimap<Direction, BakedQuad>;
    // private unculledFaces: ImmutableList$Builder<BakedQuad>;
    addAll(quadCollection: QuadCollection): QuadCollection$Builder;
    addCulledFace(direction: Direction, quad: BakedQuad): QuadCollection$Builder;
    addUnculledFace(quad: BakedQuad): QuadCollection$Builder;
    build(): QuadCollection;
}