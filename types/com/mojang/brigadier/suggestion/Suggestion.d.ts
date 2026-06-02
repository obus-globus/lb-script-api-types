import type { Message } from '../../../../com/mojang/brigadier/Message.d.ts'
import type { StringRange } from '../../../../com/mojang/brigadier/context/StringRange.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Suggestion extends Object implements Comparable<Suggestion> {
    constructor(arg0: StringRange, arg1: string)
    constructor(arg0: StringRange, arg1: string, arg2: Message)
    readonly range: StringRange;
    readonly text: string;
    readonly tooltip: Message;
    apply(arg0: string): string;
    compareTo(arg0: Suggestion): number;
    compareToIgnoreCase(arg0: Suggestion): number;
    equals(arg0: Object | null): boolean;
    expand(arg0: string, arg1: StringRange): Suggestion;
    getRange(): StringRange;
    getText(): string;
    getTooltip(): Message;
    hashCode(): number;
    toString(): string;
}