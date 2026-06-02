import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadAtlas } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadAtlas.d.ts'
import type { QuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadView.d.ts'
import type { ShadeMode } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/ShadeMode.d.ts'
import type { TriState } from '../../../../../../../../net/fabricmc/fabric/api/util/TriState.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { ItemStackRenderState$FoilType } from '../../../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState$FoilType.d.ts'
import type { RenderType } from '../../../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { BakedQuad } from '../../../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { Material$Baked } from '../../../../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vector2f } from '../../../../../../../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../../../../../../../org/joml/Vector2fc.d.ts'
import type { Vector3f } from '../../../../../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../../../../../org/joml/Vector3fc.d.ts'
export interface MutableQuadView extends Object, QuadView{
    ambientOcclusion(arg0: TriState): MutableQuadView;
    animated(arg0: boolean): MutableQuadView;
    atlas(arg0: QuadAtlas): MutableQuadView;
    chunkLayer(arg0: ChunkSectionLayer): MutableQuadView;
    clear(): MutableQuadView;
    color(arg0: number, arg1: number): MutableQuadView;
    color(arg0: number, arg1: number, arg2: number, arg3: number): MutableQuadView;
    copyFrom(arg0: QuadView): MutableQuadView;
    cullFace(arg0: Direction): MutableQuadView;
    diffuseShade(arg0: boolean): MutableQuadView;
    emissive(arg0: boolean): MutableQuadView;
    foilType(arg0: ItemStackRenderState$FoilType): MutableQuadView;
    fromBakedQuad(arg0: BakedQuad): MutableQuadView;
    itemRenderType(arg0: RenderType): MutableQuadView;
    lightmap(arg0: number, arg1: number): MutableQuadView;
    lightmap(arg0: number, arg1: number, arg2: number, arg3: number): MutableQuadView;
    materialBake(arg0: Material$Baked, arg1: number): MutableQuadView;
    minLightmap(arg0: number): MutableQuadView;
    multiplyColor(arg0: number): MutableQuadView;
    nominalFace(arg0: Direction): MutableQuadView;
    normal(arg0: number, arg1: number, arg2: number, arg3: number): MutableQuadView;
    normal(arg0: number, arg1: Vector3f): MutableQuadView;
    normal(arg0: number, arg1: Vector3fc): MutableQuadView;
    pos(arg0: number, arg1: number, arg2: number, arg3: number): MutableQuadView;
    pos(arg0: number, arg1: Vector3f): MutableQuadView;
    pos(arg0: number, arg1: Vector3fc): MutableQuadView;
    postMaterialBake(arg0: Material$Baked): MutableQuadView;
    shadeMode(arg0: ShadeMode): MutableQuadView;
    square(arg0: Direction, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): MutableQuadView;
    tag(arg0: number): MutableQuadView;
    tintIndex(arg0: number): MutableQuadView;
    toBakedQuad(arg0: TextureAtlasSprite): BakedQuad;
    translate(arg0: number, arg1: number, arg2: number): MutableQuadView;
    uv(arg0: number, arg1: number, arg2: number): MutableQuadView;
    uv(arg0: number, arg1: Vector2f): MutableQuadView;
    uv(arg0: number, arg1: Vector2fc): MutableQuadView;
    uvUnitSquare(): MutableQuadView;
}