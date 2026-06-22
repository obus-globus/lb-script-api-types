import type { PoseStack$Pose } from '../../../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { VertexConsumer } from '../../../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
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
    ambientOcclusion(): TriState;
    animated(arg0: boolean): MutableQuadView;
    animated(): boolean;
    atlas(arg0: QuadAtlas): MutableQuadView;
    atlas(): QuadAtlas;
    buffer(arg0: number, arg1: PoseStack$Pose, arg2: VertexConsumer): void;
    buffer(arg0: number, arg1: VertexConsumer): void;
    chunkLayer(arg0: ChunkSectionLayer): MutableQuadView;
    chunkLayer(): ChunkSectionLayer;
    clear(): MutableQuadView;
    color(arg0: number, arg1: number): MutableQuadView;
    color(arg0: number, arg1: number, arg2: number, arg3: number): MutableQuadView;
    color(arg0: number): number;
    copyFrom(arg0: QuadView): MutableQuadView;
    copyNormal(arg0: number, arg1: Vector3f): Vector3f;
    copyPos(arg0: number, arg1: Vector3f): Vector3f;
    copyUv(arg0: number, arg1: Vector2f): Vector2f;
    cullFace(arg0: Direction): MutableQuadView;
    cullFace(): Direction;
    diffuseShade(arg0: boolean): MutableQuadView;
    diffuseShade(): boolean;
    emissive(arg0: boolean): MutableQuadView;
    emissive(): boolean;
    faceNormal(): Vector3fc;
    foilType(arg0: ItemStackRenderState$FoilType): MutableQuadView;
    foilType(): ItemStackRenderState$FoilType;
    fromBakedQuad(arg0: BakedQuad): MutableQuadView;
    hasNormal(arg0: number): boolean;
    itemRenderType(arg0: RenderType): MutableQuadView;
    itemRenderType(): RenderType;
    lightFace(): Direction;
    lightmap(arg0: number, arg1: number): MutableQuadView;
    lightmap(arg0: number, arg1: number, arg2: number, arg3: number): MutableQuadView;
    lightmap(arg0: number): number;
    materialBake(arg0: Material$Baked, arg1: number): MutableQuadView;
    minLightmap(arg0: number): MutableQuadView;
    multiplyColor(arg0: number): MutableQuadView;
    nominalFace(arg0: Direction): MutableQuadView;
    nominalFace(): Direction;
    normal(arg0: number, arg1: number, arg2: number, arg3: number): MutableQuadView;
    normal(arg0: number, arg1: Vector3f): MutableQuadView;
    normal(arg0: number, arg1: Vector3fc): MutableQuadView;
    normalX(arg0: number): number;
    normalY(arg0: number): number;
    normalZ(arg0: number): number;
    pos(arg0: number, arg1: number, arg2: number, arg3: number): MutableQuadView;
    pos(arg0: number, arg1: Vector3f): MutableQuadView;
    pos(arg0: number, arg1: Vector3fc): MutableQuadView;
    posByIndex(arg0: number, arg1: number): number;
    postMaterialBake(arg0: Material$Baked): MutableQuadView;
    shadeMode(arg0: ShadeMode): MutableQuadView;
    shadeMode(): ShadeMode;
    square(arg0: Direction, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): MutableQuadView;
    tag(arg0: number): MutableQuadView;
    tag(): number;
    tintIndex(arg0: number): MutableQuadView;
    tintIndex(): number;
    toBakedQuad(arg0: TextureAtlasSprite): BakedQuad;
    translate(arg0: number, arg1: number, arg2: number): MutableQuadView;
    u(arg0: number): number;
    uv(arg0: number, arg1: number, arg2: number): MutableQuadView;
    uv(arg0: number, arg1: Vector2f): MutableQuadView;
    uv(arg0: number, arg1: Vector2fc): MutableQuadView;
    uvUnitSquare(): MutableQuadView;
    v(arg0: number): number;
    x(arg0: number): number;
    y(arg0: number): number;
    z(arg0: number): number;
}