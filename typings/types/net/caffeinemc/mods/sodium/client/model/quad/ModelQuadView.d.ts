import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
export interface ModelQuadView extends Object{
    calculateNormal(): number;
    getAccurateNormal(arg0: number): number;
    getColor(arg0: number): number;
    getFaceNormal(): number;
    getFlags(): number;
    getLight(arg0: number): number;
    getLightFace(): Direction;
    getMaxLightQuad(arg0: number): number;
    getSprite(): TextureAtlasSprite;
    getTexU(arg0: number): number;
    getTexV(arg0: number): number;
    getTintIndex(): number;
    getVertexNormal(arg0: number): number;
    getX(arg0: number): number;
    getY(arg0: number): number;
    getZ(arg0: number): number;
    hasColor(): boolean;
}