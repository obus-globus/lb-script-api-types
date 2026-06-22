import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelQuadView } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
export interface ModelQuadViewMutable extends Object, ModelQuadView{
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
    setColor(arg0: number, arg1: number): void;
    setFaceNormal(arg0: number): void;
    setFlags(arg0: number): void;
    setLight(arg0: number, arg1: number): void;
    setLightFace(arg0: Direction): void;
    setNormal(arg0: number, arg1: number): void;
    setSprite(arg0: TextureAtlasSprite): void;
    setTexU(arg0: number, arg1: number): void;
    setTexV(arg0: number, arg1: number): void;
    setTintIndex(arg0: number): void;
    setX(arg0: number, arg1: number): void;
    setY(arg0: number, arg1: number): void;
    setZ(arg0: number, arg1: number): void;
}