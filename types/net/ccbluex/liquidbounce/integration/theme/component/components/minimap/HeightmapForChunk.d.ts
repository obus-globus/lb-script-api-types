import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class HeightmapForChunk extends Object {
    constructor()
    // private heightmap: number[];
    getHeight(x: number, z: number): number;
    setHeight(x: number, z: number, height: number): void;
}