import type { Object } from '../../../java/lang/Object.d.ts'
import type { Style } from '../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSink } from '../../../net/minecraft/util/FormattedCharSink.d.ts'
export class StringSplitter$WidthLimitedCharSink extends Object implements FormattedCharSink {
    constructor(null_: StringSplitter$WidthLimitedCharSink, maxWidth: number)
    // private maxWidth: number;
    readonly position: number;
    accept(position: number, style: Style, codepoint: number): boolean;
    getPosition(): number;
    resetPosition(): void;
}