import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FT_Vector } from '../../../../../../org/lwjgl/util/freetype/FT_Vector.d.ts'
export class FreeTypeUtil extends Object {
    static LIBRARY_LOCK: Object;
    static assertError(paramerrorCode: number, paramtype: string): void;
    static checkError(paramerrorCode: number, paramtype: string): boolean;
    static destroy(): void;
    static getLibrary(): number;
    static setVector(paramvector: FT_Vector, paramx: number, paramy: number): FT_Vector;
    static x(paramvector: FT_Vector): number;
    constructor()
}