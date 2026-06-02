import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CubeDeformation extends Object {
    static NONE: CubeDeformation;
    constructor(grow: number)
    constructor(growX: number, growY: number, growZ: number)
    // private growX: number;
    // private growY: number;
    // private growZ: number;
    extend(factor: number): CubeDeformation;
    extend(factorX: number, factorY: number, factorZ: number): CubeDeformation;
}