import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChatUtil$ChatFormattingState extends Object {
    constructor(arg0: string[], arg1: string, arg2: string)
    // private color: string;
    // private defaultColor: string;
    // private formatting: string[];
    appendTo(arg0: StringBuilder): void;
    copy(): ChatUtil$ChatFormattingState;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    processNextControlChar(arg0: string): void;
    // private setColor(arg0: string): void;
}