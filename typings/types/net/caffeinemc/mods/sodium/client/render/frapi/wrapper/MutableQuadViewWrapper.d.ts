import type { QuadViewWrapper } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/frapi/wrapper/QuadViewWrapper.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/model/MutableQuadViewImpl.d.ts'
import type { QuadViewImpl } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/model/QuadViewImpl.d.ts'
import type { MutableQuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableQuadView.d.ts'
import type { QuadAtlas } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadAtlas.d.ts'
import type { QuadEmitter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
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
export class MutableQuadViewWrapper extends QuadViewWrapper implements QuadEmitter {
    static BAKE_FLIP_U: number;
    static BAKE_FLIP_V: number;
    static BAKE_LOCK_UV: number;
    static BAKE_NORMALIZED: number;
    static BAKE_ROTATE_180: number;
    static BAKE_ROTATE_270: number;
    static BAKE_ROTATE_90: number;
    static BAKE_ROTATE_NONE: number;
    static CULL_FACE_EPSILON: number;
    constructor(arg0: MutableQuadViewImpl)
    // private activeTransform: (param0: MutableQuadView) => boolean;
    // private mutableQuad: MutableQuadViewImpl;
    // private stackTransform: (param0: MutableQuadView) => boolean;
    // private transformStack: (param0: MutableQuadView) => boolean[];
    ambientOcclusion(): TriState;
    ambientOcclusion(arg0: TriState): QuadEmitter;
    animated(): boolean;
    animated(arg0: boolean): QuadEmitter;
    atlas(): QuadAtlas;
    atlas(arg0: QuadAtlas): QuadEmitter;
    chunkLayer(): ChunkSectionLayer;
    chunkLayer(arg0: ChunkSectionLayer): QuadEmitter;
    clear(): QuadEmitter;
    color(arg0: number): number;
    color(arg0: number, arg1: number): QuadEmitter;
    color(arg0: number, arg1: number, arg2: number, arg3: number): QuadEmitter;
    copyFrom(arg0: QuadView): QuadEmitter;
    cullFace(): Direction;
    cullFace(arg0: Direction): QuadEmitter;
    diffuseShade(): boolean;
    diffuseShade(arg0: boolean): QuadEmitter;
    emissive(): boolean;
    emissive(arg0: boolean): QuadEmitter;
    emit(): QuadEmitter;
    foilType(): ItemStackRenderState$FoilType;
    foilType(arg0: ItemStackRenderState$FoilType): QuadEmitter;
    fromBakedQuad(arg0: BakedQuad): QuadEmitter;
    getOriginal(): MutableQuadViewImpl;
    itemRenderType(): RenderType;
    itemRenderType(arg0: RenderType): QuadEmitter;
    lightmap(arg0: number): number;
    lightmap(arg0: number, arg1: number): QuadEmitter;
    lightmap(arg0: number, arg1: number, arg2: number, arg3: number): QuadEmitter;
    materialBake(arg0: Material$Baked, arg1: number): QuadEmitter;
    minLightmap(arg0: number): QuadEmitter;
    multiplyColor(arg0: number): QuadEmitter;
    nominalFace(): Direction;
    nominalFace(arg0: Direction): QuadEmitter;
    normal(arg0: number, arg1: number, arg2: number, arg3: number): QuadEmitter;
    normal(arg0: number, arg1: Vector3f): QuadEmitter;
    normal(arg0: number, arg1: Vector3fc): QuadEmitter;
    popTransform(): void;
    pos(arg0: number, arg1: number, arg2: number, arg3: number): QuadEmitter;
    pos(arg0: number, arg1: Vector3f): QuadEmitter;
    pos(arg0: number, arg1: Vector3fc): QuadEmitter;
    postMaterialBake(arg0: Material$Baked): QuadEmitter;
    pushTransform(arg0: (param0: MutableQuadView) => boolean): void;
    setDelegate(arg0: MutableQuadViewImpl): void;
    setDelegate(arg0: QuadViewImpl): void;
    shadeMode(): ShadeMode;
    shadeMode(arg0: ShadeMode): QuadEmitter;
    square(arg0: Direction, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): QuadEmitter;
    tag(): number;
    tag(arg0: number): QuadEmitter;
    tintIndex(): number;
    tintIndex(arg0: number): QuadEmitter;
    transformAndEmit(): void;
    translate(arg0: number, arg1: number, arg2: number): QuadEmitter;
    uv(arg0: number, arg1: number, arg2: number): QuadEmitter;
    uv(arg0: number, arg1: Vector2f): QuadEmitter;
    uv(arg0: number, arg1: Vector2fc): QuadEmitter;
    uvUnitSquare(): MutableQuadView;
}