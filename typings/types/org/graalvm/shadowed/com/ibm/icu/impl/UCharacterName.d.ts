import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UCharacterName$AlgorithmName } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UCharacterName$AlgorithmName.d.ts'
export class UCharacterName extends Object {
    static INSTANCE: UCharacterName;
    static LINES_PER_GROUP_: number;
    static getCodepointMSB(paramcodepoint: number): number;
    static getGroupLimit(parammsb: number): number;
    static getGroupMin(parammsb: number): number;
    static getGroupMinFromCodepoint(paramcodepoint: number): number;
    static getGroupOffset(paramcodepoint: number): number;
    private constructor()
    // private m_ISOCommentSet_: number[];
    // private m_algorithm_: UCharacterName$AlgorithmName[];
    m_groupcount_: number;
    // private m_groupinfo_: string[];
    // private m_grouplengths_: string[];
    // private m_groupoffsets_: string[];
    // private m_groupsize_: number;
    // private m_groupstring_: number[];
    // private m_maxISOCommentLength_: number;
    // private m_maxNameLength_: number;
    // private m_nameSet_: number[];
    // private m_tokenstring_: number[];
    // private m_tokentable_: string[];
    // private m_utilIntBuffer_: number[];
    // private m_utilStringBuffer_: StringBuffer;
    // private addAlgorithmName(maxlength: number): number;
    // private addExtendedName(maxlength: number): number;
    // private addGroupName(maxlength: number): void;
    // private addGroupName(offset: number, length: number, tokenlength: number[], set: number[]): number[];
    // private convert(set: number[], uset: string[]): void;
    // private getAlgName(ch: number, choice: number): string;
    getAlgorithmEnd(index: number): number;
    getAlgorithmLength(): number;
    getAlgorithmName(index: number, codepoint: number): string;
    getAlgorithmStart(index: number): number;
    getCharFromName(choice: number, name: string): number;
    getCharNameCharacters(set: string[]): void;
    getExtendedName(ch: number): string;
    getExtendedOr10Name(ch: number): string;
    getGroup(codepoint: number): number;
    // private getGroupChar(index: number, length: string[], name: string, choice: number): number;
    // private getGroupChar(name: string, choice: number): number;
    getGroupLengths(index: number, offsets: string[], lengths: string[]): number;
    getGroupMSB(gindex: number): number;
    getGroupName(ch: number, choice: number): string;
    getGroupName(index: number, length: number, choice: number): string;
    getISOCommentCharacters(set: string[]): void;
    getMaxCharNameLength(): number;
    getMaxISOCommentLength(): number;
    getName(ch: number, choice: number): string;
    // private initNameSetsLengths(): boolean;
    setAlgorithm(alg: UCharacterName$AlgorithmName[]): boolean;
    setGroup(group: string[], groupstring: number[]): boolean;
    setGroupCountSize(count: number, size: number): boolean;
    setToken(token: string[], tokenstring: number[]): boolean;
}