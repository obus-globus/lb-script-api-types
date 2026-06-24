import type { TransliteratorParser } from '../../../../com/ibm/icu/text/TransliteratorParser.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TransliteratorParser$RuleHalf extends Object {
    private constructor()
    anchorEnd: boolean;
    anchorStart: boolean;
    ante: number;
    cursor: number;
    cursorOffset: number;
    // private cursorOffsetPos: number;
    // private nextSegmentNumber: number;
    post: number;
    text: string;
    isValidInput(arg0: TransliteratorParser): boolean;
    isValidOutput(arg0: TransliteratorParser): boolean;
    parse(arg0: string, arg1: number, arg2: number, arg3: TransliteratorParser): number;
    // private parseSection(arg0: string, arg1: number, arg2: number, arg3: TransliteratorParser, arg4: StringBuilder, arg5: string[], arg6: boolean): number;
    removeContext(): void;
}