import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UCharacterName$AlgorithmName extends Object {
    constructor()
    // private m_factor_: string[];
    // private m_factorstring_: number[];
    // private m_prefix_: string;
    // private m_rangeend_: number;
    // private m_rangestart_: number;
    // private m_type_: number;
    // private m_utilIntBuffer_: number[];
    // private m_utilStringBuffer_: StringBuffer;
    // private m_variant_: number;
    add(arg0: number[], arg1: number): number;
    appendName(arg0: number, arg1: StringBuffer): void;
    // private compareFactorString(arg0: number[], arg1: number, arg2: string, arg3: number): boolean;
    contains(arg0: number): boolean;
    getChar(arg0: string): number;
    // private getFactorString(arg0: number[], arg1: number): string;
    setFactor(arg0: string[]): boolean;
    setFactorString(arg0: number[]): boolean;
    setInfo(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    setPrefix(arg0: string): boolean;
}