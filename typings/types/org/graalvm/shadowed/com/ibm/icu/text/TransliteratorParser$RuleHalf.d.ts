import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TransliteratorParser } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TransliteratorParser.d.ts'
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
    isValidInput(parser: TransliteratorParser): boolean;
    isValidOutput(parser: TransliteratorParser): boolean;
    parse(rule: string, pos: number, limit: number, parser: TransliteratorParser): number;
    // private parseSection(rule: string, pos: number, limit: number, parser: TransliteratorParser, buf: StringBuilder, illegal: string[], isSegment: boolean): number;
    removeContext(): void;
}