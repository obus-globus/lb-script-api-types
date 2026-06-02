import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
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
    add(set: number[], maxlength: number): number;
    appendName(ch: number, str: StringBuffer): void;
    // private compareFactorString(index: number[], length: number, str: string, offset: number): boolean;
    contains(ch: number): boolean;
    getChar(name: string): number;
    // private getFactorString(index: number[], length: number): string;
    setFactor(factor: string[]): boolean;
    setFactorString(string: number[]): boolean;
    setInfo(rangestart: number, rangeend: number, type: number, variant: number): boolean;
    setPrefix(prefix: string): boolean;
}