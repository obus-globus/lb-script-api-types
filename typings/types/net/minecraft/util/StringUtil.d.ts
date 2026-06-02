import type { Object } from '../../../java/lang/Object.d.ts'
export class StringUtil extends Object {
    static endsWithNewLine(params: string): boolean;
    static filterText(paraminput: string): string;
    static filterText(paraminput: string, parammultiline: boolean): string;
    static formatTickDuration(paramticks: number, paramtickrate: number): string;
    static isAllowedChatCharacter(paramarg0: number): boolean;
    static isBlank(paramstring: string): boolean;
    static isNullOrEmpty(params: string): boolean;
    static isValidPlayerName(paramname: string): boolean;
    static isWhitespace(paramcodepoint: number): boolean;
    static lineCount(params: string): number;
    static stripColor(paraminput: string): string;
    static trimChatMessage(parammessage: string): string;
    static truncateStringIfNecessary(params: string, parammaxLength: number, paramaddDotDotDotIfTruncated: boolean): string;
    constructor()
}