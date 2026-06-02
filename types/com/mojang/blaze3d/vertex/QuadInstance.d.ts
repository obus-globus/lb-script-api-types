import type { Object } from '../../../../java/lang/Object.d.ts'
export class QuadInstance extends Object {
    constructor()
    // private color0: number;
    // private color1: number;
    // private color2: number;
    // private color3: number;
    // private lightCoords0: number;
    // private lightCoords1: number;
    // private lightCoords2: number;
    // private lightCoords3: number;
    readonly overlayCoords: number;
    getColor(vertex: number): number;
    getLightCoords(vertex: number): number;
    getLightCoordsWithEmission(vertex: number, lightEmission: number): number;
    multiplyColor(color: number): void;
    overlayCoords(): number;
    scaleColor(scale: number): void;
    setColor(color: number): void;
    setColor(vertex: number, color: number): void;
    setLightCoords(lightCoords: number): void;
    setLightCoords(vertex: number, lightCoords: number): void;
    setOverlayCoords(overlayCoords: number): void;
}