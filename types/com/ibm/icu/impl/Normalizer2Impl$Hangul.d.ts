import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Normalizer2Impl$Hangul extends Object {
    static HANGUL_BASE: number;
    static HANGUL_COUNT: number;
    static HANGUL_END: number;
    static HANGUL_LIMIT: number;
    static JAMO_L_BASE: number;
    static JAMO_L_COUNT: number;
    static JAMO_L_END: number;
    static JAMO_L_LIMIT: number;
    static JAMO_T_BASE: number;
    static JAMO_T_COUNT: number;
    static JAMO_T_END: number;
    static JAMO_VT_COUNT: number;
    static JAMO_V_BASE: number;
    static JAMO_V_COUNT: number;
    static JAMO_V_END: number;
    static JAMO_V_LIMIT: number;
    static decompose(paramarg0: number, paramarg1: Appendable): number;
    static getRawDecomposition(paramarg0: number, paramarg1: Appendable): void;
    static isHangul(paramarg0: number): boolean;
    static isHangulLV(paramarg0: number): boolean;
    static isJamo(paramarg0: number): boolean;
    static isJamoL(paramarg0: number): boolean;
    static isJamoT(paramarg0: number): boolean;
    static isJamoV(paramarg0: number): boolean;
    constructor()
}