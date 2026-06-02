import type { Object } from '../../../java/lang/Object.d.ts'
export class LightCoordsUtil extends Object {
    static FULL_BRIGHT: number;
    static FULL_SKY: number;
    static addSmoothBlockEmission(paramlightCoords: number, paramblockLightEmission: number): number;
    static block(parampacked: number): number;
    static lightCoordsWithEmission(paramlightCoords: number, paramemission: number): number;
    static max(paramcoords1: number, paramcoords2: number): number;
    static pack(paramblock: number, paramsky: number): number;
    static sky(parampacked: number): number;
    static smoothBlend(paramneighbor1: number, paramneighbor2: number, paramneighbor3: number, paramcenter: number): number;
    static smoothBlock(parampacked: number): number;
    static smoothPack(paramblock: number, paramsky: number): number;
    static smoothSky(parampacked: number): number;
    static smoothWeightedBlend(paramcoords1: number, paramcoords2: number, paramcoords3: number, paramcoords4: number, paramweight1: number, paramweight2: number, paramweight3: number, paramweight4: number): number;
    static withBlock(paramcoords: number, paramblock: number): number;
    constructor()
}