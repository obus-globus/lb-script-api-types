import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { Format$Field } from '../../../../../../../java/text/Format$Field.d.ts'
import type { IntStream } from '../../../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class FormattedStringBuilder extends Object implements Appendable, CharSequence {
    static EMPTY: FormattedStringBuilder;
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    static unwrapField(paramfield: Object): Format$Field;
    constructor()
    constructor(capacity: number)
    constructor(source: FormattedStringBuilder)
    // private appendOffset: number;
    appendableField: Object;
    // private chars: string[];
    // private fields: Object[];
    // private length: number;
    /*not mapped: */ length(): number;
    // private zero: number;
    append(c: string): Appendable;
    append(chars: string[], fields: Object[]): number;
    append(csq: CharSequence): Appendable;
    append(sequence: CharSequence, field: Object): number;
    append(csq: CharSequence, start: number, end: number): Appendable;
    append(other: FormattedStringBuilder): number;
    appendChar16(codeUnit: string, field: Object): number;
    appendCodePoint(codePoint: number, field: Object): number;
    chars(): IntStream;
    clear(): FormattedStringBuilder;
    codePointAt(index: number): number;
    codePointBefore(index: number): number;
    codePointCount(): number;
    codePoints(): IntStream;
    contentEquals(chars: string[], fields: Object[]): boolean;
    contentEquals(other: FormattedStringBuilder): boolean;
    copyFrom(source: FormattedStringBuilder): void;
    equals(other: Object | null): boolean;
    fieldAt(index: number): Object;
    get(index: number): string;
    // private getCapacity(): number;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    getFirstCodePoint(): number;
    getLastCodePoint(): number;
    hashCode(): number;
    insert(index: number, chars: string[], fields: Object[]): number;
    insert(index: number, sequence: CharSequence, field: Object): number;
    insert(index: number, sequence: CharSequence, start: number, end: number, field: Object): number;
    insert(index: number, other: FormattedStringBuilder): number;
    insertChar16(index: number, codeUnit: string, field: Object): number;
    insertCodePoint(index: number, codePoint: number, field: Object): number;
    isEmpty(): boolean;
    // private prepareForInsert(index: number, count: number): number;
    // private prepareForInsertHelper(index: number, count: number): number;
    // private remove(index: number, count: number): number;
    setAppendIndex(index: number): void;
    setAppendableField(field: Object): void;
    splice(startThis: number, endThis: number, sequence: CharSequence, startOther: number, endOther: number, field: Object): number;
    subSequence(start: number, end: number): CharSequence;
    subString(start: number, end: number): string;
    toCharArray(): string[];
    toDebugString(): string;
    toFieldArray(): Object[];
    toString(): string;
}