import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelQuadView } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { ModelQuadFacing } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/properties/ModelQuadFacing.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
export interface BakedQuadView extends Object, ModelQuadView{
    calculateNormal(): number;
    getAccurateNormal(arg0: number): number;
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
    hasColor(): boolean;
    hasShade(): boolean;
}