import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelQuadView } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { ModelQuadFacing } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/properties/ModelQuadFacing.d.ts'
import type { ExtendedQuadViewImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/frapi/wrapper/ExtendedQuadViewImpl.d.ts'
import type { QuadViewWrapper } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/frapi/wrapper/QuadViewWrapper.d.ts'
import type { SodiumQuadAtlas } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/SodiumQuadAtlas.d.ts'
import type { SodiumShadeMode } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/SodiumShadeMode.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { ItemStackRenderState$FoilType } from '../../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState$FoilType.d.ts'
import type { RenderType } from '../../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { TriState } from '../../../../../../../net/minecraft/util/TriState.d.ts'
import type { Vector2f } from '../../../../../../../org/joml/Vector2f.d.ts'
import type { Vector3f } from '../../../../../../../org/joml/Vector3f.d.ts'
export class QuadViewImpl extends Object implements ModelQuadView, ExtendedQuadViewImpl {
    constructor()
    baseIndex: number;
    data: number[];
    // private isGeometryInvalid: boolean;
    nominalFace: Direction;
    readonly wrapper: QuadViewWrapper;
    ambientOcclusion(): TriState;
    animated(): boolean;
    baseColor(arg0: number): number;
    calculateNormal(): number;
    computeGeometry(): void;
    copyNormal(arg0: number, arg1: Vector3f): Vector3f;
    copyPos(arg0: number, arg1: Vector3f): Vector3f;
    copyUv(arg0: number, arg1: Vector2f): Vector2f;
    diffuseShade(): boolean;
    emissive(): boolean;
    faceNormal(): Vector3f;
    geometryFlags(): number;
    getAccurateNormal(arg0: number): number;
    getColor(arg0: number): number;
    getCullFace(): Direction;
    getFaceNormal(): number;
    getFlags(): number;
    getLight(arg0: number): number;
    getLightFace(): Direction;
    getMaxLightQuad(arg0: number): number;
    getNominalFace(): Direction;
    getQuadAtlas(): SodiumQuadAtlas;
    getRenderType(): ChunkSectionLayer;
    getShadeMode(): SodiumShadeMode;
    getSprite(): TextureAtlasSprite;
    getTag(): number;
    getTexU(arg0: number): number;
    getTexV(arg0: number): number;
    getTintIndex(): number;
    getVertexNormal(arg0: number): number;
    getWrapper(): QuadViewWrapper;
    getX(arg0: number): number;
    getY(arg0: number): number;
    getZ(arg0: number): number;
    glint(): ItemStackRenderState$FoilType;
    hasAllVertexNormals(): boolean;
    hasColor(): boolean;
    hasNormal(arg0: number): boolean;
    hasShade(): boolean;
    hasVertexNormals(): boolean;
    itemRenderType(): RenderType;
    load(): void;
    normalFace(): ModelQuadFacing;
    normalFlags(): number;
    normalIndex(arg0: number): number;
    normalX(arg0: number): number;
    normalY(arg0: number): number;
    normalZ(arg0: number): number;
    packedFaceNormal(): number;
    packedNormal(arg0: number): number;
    posByIndex(arg0: number, arg1: number): number;
}