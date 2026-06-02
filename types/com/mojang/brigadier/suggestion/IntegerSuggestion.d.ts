import type { Message } from '../../../../com/mojang/brigadier/Message.d.ts'
import type { StringRange } from '../../../../com/mojang/brigadier/context/StringRange.d.ts'
import type { Suggestion } from '../../../../com/mojang/brigadier/suggestion/Suggestion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IntegerSuggestion extends Suggestion {
    constructor(arg0: StringRange, arg1: number)
    constructor(arg0: StringRange, arg1: number, arg2: Message)
    readonly value: number;
    compareTo(arg0: Suggestion): number;
    compareToIgnoreCase(arg0: Suggestion): number;
    equals(arg0: Object | null): boolean;
    getValue(): number;
    hashCode(): number;
    toString(): string;
}