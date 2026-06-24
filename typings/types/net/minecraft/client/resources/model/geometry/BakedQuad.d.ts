import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BakedQuadView } from '../../../../../../net/caffeinemc/mods/sodium/client/model/quad/BakedQuadView.d.ts'
import type { ModelQuadFacing } from '../../../../../../net/caffeinemc/mods/sodium/client/model/quad/properties/ModelQuadFacing.d.ts'
import type { TextureAtlasSprite } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { BakedQuad$MaterialInfo } from '../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad$MaterialInfo.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vector3fc } from '../../../../../../org/joml/Vector3fc.d.ts'
export class BakedQuad extends Record implements BakedQuadView {
    static FLAG_ANIMATED: number;
    static FLAG_TRANSLUCENT: number;
    static VERTEX_COUNT: number;
    constructor(position0: Vector3fc, position1: Vector3fc, position2: Vector3fc, position3: Vector3fc, packedUV0: number, packedUV1: number, packedUV2: number, packedUV3: number, direction: Direction, materialInfo: BakedQuad$MaterialInfo)
    // private direction: Direction;
    readonly flags: number;
    // private materialInfo: BakedQuad$MaterialInfo;
    // private normal: number;
    readonly normalFace: ModelQuadFacing;
    // private packedUV0: number;
    // private packedUV1: number;
    // private packedUV2: number;
    // private packedUV3: number;
    // private position0: Vector3fc;
    // private position1: Vector3fc;
    // private position2: Vector3fc;
    // private position3: Vector3fc;
    direction(): Direction;
    equals(o: Object | null): boolean;
    getColor(arg0: number): number;
    getFaceNormal(): number;
    getFlags(): number;
    getLight(arg0: number): number;
    getLightEmission(): number;
    getLightFace(): Direction;
    getMaxLightQuad(arg0: number): number;
    getNormalFace(): ModelQuadFacing;
    getSprite(): TextureAtlasSprite;
    getTexU(arg0: number): number;
    getTexV(arg0: number): number;
    getTintIndex(): number;
    getVertexNormal(arg0: number): number;
    getX(arg0: number): number;
    getY(arg0: number): number;
    getZ(arg0: number): number;
    hasAO(): boolean;
    hasShade(): boolean;
    hashCode(): number;
    materialInfo(): BakedQuad$MaterialInfo;
    packedUV(vertex: number): number;
    packedUV0(): number;
    packedUV1(): number;
    packedUV2(): number;
    packedUV3(): number;
    position(vertex: number): Vector3fc;
    position0(): Vector3fc;
    position1(): Vector3fc;
    position2(): Vector3fc;
    position3(): Vector3fc;
    toString(): string;
}