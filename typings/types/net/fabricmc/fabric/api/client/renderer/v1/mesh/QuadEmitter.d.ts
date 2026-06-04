import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MutableQuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableQuadView.d.ts'
import type { QuadAtlas } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadAtlas.d.ts'
import type { QuadTransform } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadTransform.d.ts'
import type { QuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadView.d.ts'
import type { ShadeMode } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/ShadeMode.d.ts'
import type { TriState } from '../../../../../../../../net/fabricmc/fabric/api/util/TriState.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { ItemStackRenderState$FoilType } from '../../../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState$FoilType.d.ts'
import type { RenderType } from '../../../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { BakedQuad } from '../../../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { Material$Baked } from '../../../../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vector2f } from '../../../../../../../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../../../../../../../org/joml/Vector2fc.d.ts'
import type { Vector3f } from '../../../../../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../../../../../org/joml/Vector3fc.d.ts'
export interface QuadEmitter extends Object, MutableQuadView{
    ambientOcclusion(arg0: TriState): QuadEmitter;
    animated(arg0: boolean): QuadEmitter;
    atlas(arg0: QuadAtlas): QuadEmitter;
    chunkLayer(arg0: ChunkSectionLayer): QuadEmitter;
    clear(): QuadEmitter;
    color(arg0: number, arg1: number, arg2: number, arg3: number): MutableQuadView;
    color(arg0: number, arg1: number): QuadEmitter;
    color(arg0: number, arg1: number, arg2: number, arg3: number): QuadEmitter;
    copyFrom(arg0: QuadView): QuadEmitter;
    cullFace(arg0: Direction): QuadEmitter;
    diffuseShade(arg0: boolean): QuadEmitter;
    emissive(arg0: boolean): QuadEmitter;
    emit(): QuadEmitter;
    foilType(arg0: ItemStackRenderState$FoilType): QuadEmitter;
    fromBakedQuad(arg0: BakedQuad): QuadEmitter;
    itemRenderType(arg0: RenderType): QuadEmitter;
    lightmap(arg0: number, arg1: number, arg2: number, arg3: number): MutableQuadView;
    lightmap(arg0: number, arg1: number): QuadEmitter;
    lightmap(arg0: number, arg1: number, arg2: number, arg3: number): QuadEmitter;
    materialBake(arg0: Material$Baked, arg1: number): MutableQuadView;
    materialBake(arg0: Material$Baked, arg1: number): QuadEmitter;
    minLightmap(arg0: number): MutableQuadView;
    minLightmap(arg0: number): QuadEmitter;
    multiplyColor(arg0: number): MutableQuadView;
    multiplyColor(arg0: number): QuadEmitter;
    nominalFace(arg0: Direction): QuadEmitter;
    normal(arg0: number, arg1: Vector3f): MutableQuadView;
    normal(arg0: number, arg1: Vector3fc): MutableQuadView;
    normal(arg0: number, arg1: number, arg2: number, arg3: number): QuadEmitter;
    normal(arg0: number, arg1: Vector3f): QuadEmitter;
    normal(arg0: number, arg1: Vector3fc): QuadEmitter;
    popTransform(): void;
    pos(arg0: number, arg1: Vector3f): MutableQuadView;
    pos(arg0: number, arg1: Vector3fc): MutableQuadView;
    pos(arg0: number, arg1: number, arg2: number, arg3: number): QuadEmitter;
    pos(arg0: number, arg1: Vector3f): QuadEmitter;
    pos(arg0: number, arg1: Vector3fc): QuadEmitter;
    postMaterialBake(arg0: Material$Baked): MutableQuadView;
    postMaterialBake(arg0: Material$Baked): QuadEmitter;
    pushTransform(arg0: (param0: MutableQuadView) => kotlin.Boolean): void;
    shadeMode(arg0: ShadeMode): QuadEmitter;
    square(arg0: Direction, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): MutableQuadView;
    square(arg0: Direction, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): QuadEmitter;
    tag(arg0: number): QuadEmitter;
    tintIndex(arg0: number): QuadEmitter;
    translate(arg0: number, arg1: number, arg2: number): MutableQuadView;
    translate(arg0: number, arg1: number, arg2: number): QuadEmitter;
    uv(arg0: number, arg1: Vector2f): MutableQuadView;
    uv(arg0: number, arg1: Vector2fc): MutableQuadView;
    uv(arg0: number, arg1: number, arg2: number): QuadEmitter;
    uv(arg0: number, arg1: Vector2f): QuadEmitter;
    uv(arg0: number, arg1: Vector2fc): QuadEmitter;
    uvUnitSquare(): MutableQuadView;
}