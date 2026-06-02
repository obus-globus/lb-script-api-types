import type { UCharacterName$AlgorithmName } from '../../../../com/ibm/icu/impl/UCharacterName$AlgorithmName.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UCharacterName extends Object {
    static INSTANCE: UCharacterName;
    static LINES_PER_GROUP_: number;
    static getCodepointMSB(paramarg0: number): number;
    static getGroupLimit(paramarg0: number): number;
    static getGroupMin(paramarg0: number): number;
    static getGroupMinFromCodepoint(paramarg0: number): number;
    static getGroupOffset(paramarg0: number): number;
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
    // private addAlgorithmName(arg0: number): number;
    // private addExtendedName(arg0: number): number;
    // private addGroupName(arg0: number): void;
    // private addGroupName(arg0: number, arg1: number, arg2: number[], arg3: number[]): number[];
    // private convert(arg0: number[], arg1: string[]): void;
    // private getAlgName(arg0: number, arg1: number): string;
    getAlgorithmEnd(arg0: number): number;
    getAlgorithmLength(): number;
    getAlgorithmName(arg0: number, arg1: number): string;
    getAlgorithmStart(arg0: number): number;
    getCharFromName(arg0: number, arg1: string): number;
    getCharNameCharacters(arg0: string[]): void;
    getExtendedName(arg0: number): string;
    getExtendedOr10Name(arg0: number): string;
    getGroup(arg0: number): number;
    // private getGroupChar(arg0: number, arg1: string[], arg2: string, arg3: number): number;
    // private getGroupChar(arg0: string, arg1: number): number;
    getGroupLengths(arg0: number, arg1: string[], arg2: string[]): number;
    getGroupMSB(arg0: number): number;
    getGroupName(arg0: number, arg1: number): string;
    getGroupName(arg0: number, arg1: number, arg2: number): string;
    getISOCommentCharacters(arg0: string[]): void;
    getMaxCharNameLength(): number;
    getMaxISOCommentLength(): number;
    getName(arg0: number, arg1: number): string;
    // private initNameSetsLengths(): boolean;
    setAlgorithm(arg0: UCharacterName$AlgorithmName[]): boolean;
    setGroup(arg0: string[], arg1: number[]): boolean;
    setGroupCountSize(arg0: number, arg1: number): boolean;
    setToken(arg0: string[], arg1: number[]): boolean;
}