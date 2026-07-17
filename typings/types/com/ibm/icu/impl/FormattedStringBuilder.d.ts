import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Format$Field } from '../../../../java/text/Format$Field.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class FormattedStringBuilder extends Object implements Appendable, CharSequence {
    static EMPTY: FormattedStringBuilder;
    static unwrapField(paramarg0: Object): Format$Field;
    constructor()
    constructor(arg0: FormattedStringBuilder)
    constructor(arg0: number)
    // private appendOffset: number;
    appendableField: Object;
    // private chars: string[];
    // private fields: Object[];
    // private length: number;
    /*not mapped: */ length(): number;
    // private zero: number;
    append(arg0: FormattedStringBuilder): number;
    append(arg0: string): Appendable;
    append(arg0: string[], arg1: Object[]): number;
    append(arg0: CharSequence): Appendable;
    append(arg0: CharSequence, arg1: Object): number;
    append(arg0: CharSequence, arg1: number, arg2: number): Appendable;
    appendChar16(arg0: string, arg1: Object): number;
    appendCodePoint(arg0: number, arg1: Object): number;
    chars(): IntStream;
    clear(): FormattedStringBuilder;
    codePointAt(arg0: number): number;
    codePointBefore(arg0: number): number;
    codePointCount(): number;
    codePoints(): IntStream;
    contentEquals(arg0: FormattedStringBuilder): boolean;
    contentEquals(arg0: string[], arg1: Object[]): boolean;
    copyFrom(arg0: FormattedStringBuilder): void;
    equals(arg0: Object | null): boolean;
    fieldAt(arg0: number): Object;
    get(arg0: number): string;
    // private getCapacity(): number;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    getFirstCodePoint(): number;
    getLastCodePoint(): number;
    hashCode(): number;
    insert(arg0: number, arg1: FormattedStringBuilder): number;
    insert(arg0: number, arg1: string[], arg2: Object[]): number;
    insert(arg0: number, arg1: CharSequence, arg2: Object): number;
    insert(arg0: number, arg1: CharSequence, arg2: number, arg3: number, arg4: Object): number;
    insertChar16(arg0: number, arg1: string, arg2: Object): number;
    insertCodePoint(arg0: number, arg1: number, arg2: Object): number;
    isEmpty(): boolean;
    // private prepareForInsert(arg0: number, arg1: number): number;
    // private prepareForInsertHelper(arg0: number, arg1: number): number;
    // private remove(arg0: number, arg1: number): number;
    setAppendIndex(arg0: number): void;
    setAppendableField(arg0: Object): void;
    splice(arg0: number, arg1: number, arg2: CharSequence, arg3: number, arg4: number, arg5: Object): number;
    subSequence(arg0: number, arg1: number): CharSequence;
    subString(arg0: number, arg1: number): string;
    toCharArray(): string[];
    toDebugString(): string;
    toFieldArray(): Object[];
    toString(): string;
}