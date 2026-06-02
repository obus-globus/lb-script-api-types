import type { MutableQuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableQuadView.d.ts'
import type { QuadAtlas } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadAtlas.d.ts'
import type { QuadEmitter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { QuadTransform } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadTransform.d.ts'
import type { QuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadView.d.ts'
import type { ShadeMode } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/ShadeMode.d.ts'
import type { TriState } from '../../../../../../../../net/fabricmc/fabric/api/util/TriState.d.ts'
import type { QuadViewImpl } from '../../../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/mesh/QuadViewImpl.d.ts'
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
export abstract class MutableQuadViewImpl extends QuadViewImpl implements QuadEmitter {
    static BAKE_FLIP_U: number;
    static BAKE_FLIP_V: number;
    static BAKE_LOCK_UV: number;
    static BAKE_NORMALIZED: number;
    static BAKE_ROTATE_180: number;
    static BAKE_ROTATE_270: number;
    static BAKE_ROTATE_90: number;
    static BAKE_ROTATE_NONE: number;
    static CULL_FACE_EPSILON: number;
    constructor()
    // private activeTransform: (param0: MutableQuadView) => kotlin.Boolean;
    // private stackTransform: (param0: MutableQuadView) => kotlin.Boolean;
    // private transformStack: (param0: MutableQuadView) => kotlin.Boolean[];
    ambientOcclusion(arg0: TriState): MutableQuadViewImpl;
    animated(arg0: boolean): MutableQuadViewImpl;
    atlas(arg0: QuadAtlas): MutableQuadViewImpl;
    chunkLayer(arg0: ChunkSectionLayer): MutableQuadViewImpl;
    clear(): MutableQuadViewImpl;
    color(arg0: number, arg1: number, arg2: number, arg3: number): QuadEmitter;
    color(arg0: number, arg1: number): MutableQuadViewImpl;
    copyFrom(arg0: QuadView): MutableQuadViewImpl;
    cullFace(arg0: Direction): MutableQuadViewImpl;
    diffuseShade(arg0: boolean): MutableQuadViewImpl;
    emissive(arg0: boolean): MutableQuadViewImpl;
    emit(): MutableQuadViewImpl;
    emitDirectly(): void;
    foilType(arg0: ItemStackRenderState$FoilType): MutableQuadViewImpl;
    fromBakedQuad(arg0: BakedQuad): MutableQuadViewImpl;
    itemRenderType(arg0: RenderType): MutableQuadViewImpl;
    lightmap(arg0: number, arg1: number, arg2: number, arg3: number): QuadEmitter;
    lightmap(arg0: number, arg1: number): MutableQuadViewImpl;
    materialBake(arg0: Material$Baked, arg1: number): QuadEmitter;
    minLightmap(arg0: number): QuadEmitter;
    multiplyColor(arg0: number): QuadEmitter;
    nominalFace(arg0: Direction): MutableQuadViewImpl;
    normal(arg0: number, arg1: Vector3f): QuadEmitter;
    normal(arg0: number, arg1: Vector3fc): QuadEmitter;
    normal(arg0: number, arg1: number, arg2: number, arg3: number): MutableQuadViewImpl;
    normalFlags(arg0: number): void;
    popTransform(): void;
    populateMissingNormals(): void;
    pos(arg0: number, arg1: Vector3f): QuadEmitter;
    pos(arg0: number, arg1: Vector3fc): QuadEmitter;
    pos(arg0: number, arg1: number, arg2: number, arg3: number): MutableQuadViewImpl;
    postMaterialBake(arg0: Material$Baked): QuadEmitter;
    pushTransform(arg0: (param0: MutableQuadView) => kotlin.Boolean): void;
    shadeMode(arg0: ShadeMode): MutableQuadViewImpl;
    square(arg0: Direction, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): QuadEmitter;
    tag(arg0: number): MutableQuadViewImpl;
    tintIndex(arg0: number): MutableQuadViewImpl;
    transformAndEmit(): void;
    translate(arg0: number, arg1: number, arg2: number): QuadEmitter;
    translate(arg0: number, arg1: number, arg2: number): MutableQuadViewImpl;
    uv(arg0: number, arg1: Vector2f): QuadEmitter;
    uv(arg0: number, arg1: Vector2fc): QuadEmitter;
    uv(arg0: number, arg1: number, arg2: number): MutableQuadViewImpl;
    uvUnitSquare(): MutableQuadView;
}