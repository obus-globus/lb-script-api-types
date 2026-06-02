import type { PoseStack$Pose } from '../../../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { VertexConsumer } from '../../../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadViewImpl } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/model/QuadViewImpl.d.ts'
import type { QuadAtlas } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadAtlas.d.ts'
import type { QuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadView.d.ts'
import type { ShadeMode } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/ShadeMode.d.ts'
import type { TriState } from '../../../../../../../../net/fabricmc/fabric/api/util/TriState.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { ItemStackRenderState$FoilType } from '../../../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState$FoilType.d.ts'
import type { RenderType } from '../../../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { BakedQuad } from '../../../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vector2f } from '../../../../../../../../org/joml/Vector2f.d.ts'
import type { Vector3f } from '../../../../../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../../../../../org/joml/Vector3fc.d.ts'
import type { Vector4f } from '../../../../../../../../org/joml/Vector4f.d.ts'
export class QuadViewWrapper extends Object implements QuadView {
    constructor(arg0: QuadViewImpl)
    // private normalVec: Vector3f;
    // private normalVec1: Vector3f;
    // private posVec: Vector4f;
    // private quad: QuadViewImpl;
    ambientOcclusion(): TriState;
    animated(): boolean;
    atlas(): QuadAtlas;
    buffer(arg0: number, arg1: PoseStack$Pose, arg2: VertexConsumer): void;
    buffer(arg0: number, arg1: VertexConsumer): void;
    chunkLayer(): ChunkSectionLayer;
    color(arg0: number): number;
    copyNormal(arg0: number, arg1: Vector3f): Vector3f;
    copyPos(arg0: number, arg1: Vector3f): Vector3f;
    copyUv(arg0: number, arg1: Vector2f): Vector2f;
    cullFace(): Direction;
    diffuseShade(): boolean;
    emissive(): boolean;
    faceNormal(): Vector3fc;
    foilType(): ItemStackRenderState$FoilType;
    getOriginal(): QuadViewImpl;
    hasNormal(arg0: number): boolean;
    itemRenderType(): RenderType;
    lightFace(): Direction;
    lightmap(arg0: number): number;
    nominalFace(): Direction;
    normalX(arg0: number): number;
    normalY(arg0: number): number;
    normalZ(arg0: number): number;
    posByIndex(arg0: number, arg1: number): number;
    setDelegate(arg0: QuadViewImpl): void;
    shadeMode(): ShadeMode;
    tag(): number;
    tintIndex(): number;
    toBakedQuad(arg0: TextureAtlasSprite): BakedQuad;
    u(arg0: number): number;
    v(arg0: number): number;
    x(arg0: number): number;
    y(arg0: number): number;
    z(arg0: number): number;
}