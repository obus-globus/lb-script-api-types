import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
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
    static decompose(paramc: number, parambuffer: Appendable): number;
    static getRawDecomposition(paramc: number, parambuffer: Appendable): void;
    static isHangul(paramc: number): boolean;
    static isHangulLV(paramc: number): boolean;
    static isJamo(paramc: number): boolean;
    static isJamoL(paramc: number): boolean;
    static isJamoT(paramc: number): boolean;
    static isJamoV(paramc: number): boolean;
    constructor()
}