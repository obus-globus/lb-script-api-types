import type { Object } from '../../../java/lang/Object.d.ts'
import type { StringSplitter } from '../../../net/minecraft/client/StringSplitter.d.ts'
import type { Style } from '../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSink } from '../../../net/minecraft/util/FormattedCharSink.d.ts'
export class StringSplitter$LineBreakFinder extends Object implements FormattedCharSink {
    constructor(null_: StringSplitter, maxWidth: number)
    // private hadNonZeroWidthChar: boolean;
    // private lastSpace: number;
    // private lastSpaceStyle: Style;
    // private lineBreak: number;
    // private lineBreakStyle: Style;
    // private maxWidth: number;
    // private nextChar: number;
    // private offset: number;
    // private width: number;
    accept(position: number, style: Style, codepoint: number): boolean;
    addToOffset(delta: number): void;
    // private finishIteration(lineBreak: number, style: Style): boolean;
    getSplitPosition(): number;
    getSplitStyle(): Style;
    // private lineBreakFound(): boolean;
}