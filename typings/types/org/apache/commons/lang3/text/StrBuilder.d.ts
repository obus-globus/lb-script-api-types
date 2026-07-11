import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Readable } from '../../../../../java/lang/Readable.d.ts'
import type { StringBuffer } from '../../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { IntStream } from '../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Builder } from '../../../../../org/apache/commons/lang3/builder/Builder.d.ts'
import type { StrMatcher } from '../../../../../org/apache/commons/lang3/text/StrMatcher.d.ts'
import type { StrTokenizer } from '../../../../../org/apache/commons/lang3/text/StrTokenizer.d.ts'
export class StrBuilder extends Object implements Serializable, Appendable, CharSequence, Builder<string> {
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    constructor()
    constructor(arg0: number)
    constructor(arg0: string)
    // private buffer: string[];
    /*not mapped: */ length(): number;
    // private newLine: string;
    readonly nullText: string;
    // private size: number;
    append(arg0: StringBuffer): StrBuilder;
    append(arg0: StringBuffer, arg1: number, arg2: number): StrBuilder;
    append(arg0: StringBuilder): StrBuilder;
    append(arg0: StringBuilder, arg1: number, arg2: number): StrBuilder;
    append(arg0: CharBuffer): StrBuilder;
    append(arg0: CharBuffer, arg1: number, arg2: number): StrBuilder;
    append(arg0: Object): StrBuilder;
    append(arg0: boolean): StrBuilder;
    append(arg0: string): StrBuilder;
    append(arg0: string[]): StrBuilder;
    append(arg0: string[], arg1: number, arg2: number): StrBuilder;
    append(arg0: CharSequence): StrBuilder;
    append(arg0: CharSequence, arg1: number, arg2: number): StrBuilder;
    append(arg0: number): StrBuilder;
    append(arg0: string, ...arg1: Object[]): StrBuilder;
    append(arg0: string, arg1: number, arg2: number): StrBuilder;
    append(arg0: StrBuilder): StrBuilder;
    append(arg0: StrBuilder, arg1: number, arg2: number): StrBuilder;
    appendAll<T extends unknown>(...arg0: T[]): StrBuilder;
    appendAll(arg0: (Object | null)[]): StrBuilder;
    appendAll(arg0: Iterator<Object>): StrBuilder;
    appendFixedWidthPadLeft(arg0: Object, arg1: number, arg2: string): StrBuilder;
    appendFixedWidthPadLeft(arg0: number, arg1: number, arg2: string): StrBuilder;
    appendFixedWidthPadRight(arg0: Object, arg1: number, arg2: string): StrBuilder;
    appendFixedWidthPadRight(arg0: number, arg1: number, arg2: string): StrBuilder;
    appendNewLine(): StrBuilder;
    appendNull(): StrBuilder;
    appendPadding(arg0: number, arg1: string): StrBuilder;
    appendSeparator(arg0: string): StrBuilder;
    appendSeparator(arg0: string, arg1: string): StrBuilder;
    appendSeparator(arg0: string, arg1: number): StrBuilder;
    appendTo(arg0: Appendable): void;
    appendWithSeparators(arg0: Object[], arg1: string): StrBuilder;
    appendWithSeparators(arg0: (Object | null)[], arg1: string): StrBuilder;
    appendWithSeparators(arg0: Iterator<Object>, arg1: string): StrBuilder;
    appendln(arg0: StringBuffer): StrBuilder;
    appendln(arg0: StringBuffer, arg1: number, arg2: number): StrBuilder;
    appendln(arg0: StringBuilder): StrBuilder;
    appendln(arg0: StringBuilder, arg1: number, arg2: number): StrBuilder;
    appendln(arg0: Object): StrBuilder;
    appendln(arg0: boolean): StrBuilder;
    appendln(arg0: string): StrBuilder;
    appendln(arg0: string[]): StrBuilder;
    appendln(arg0: string[], arg1: number, arg2: number): StrBuilder;
    appendln(arg0: number): StrBuilder;
    appendln(arg0: string, ...arg1: Object[]): StrBuilder;
    appendln(arg0: string, arg1: number, arg2: number): StrBuilder;
    appendln(arg0: StrBuilder): StrBuilder;
    appendln(arg0: StrBuilder, arg1: number, arg2: number): StrBuilder;
    asReader(): Reader;
    asTokenizer(): StrTokenizer;
    asWriter(): Writer;
    build(): string;
    capacity(): number;
    chars(): IntStream;
    clear(): StrBuilder;
    codePoints(): IntStream;
    contains(arg0: string): boolean;
    contains(arg0: StrMatcher): boolean;
    delete(arg0: number, arg1: number): StrBuilder;
    deleteAll(arg0: string): StrBuilder;
    deleteAll(arg0: StrMatcher): StrBuilder;
    deleteCharAt(arg0: number): StrBuilder;
    deleteFirst(arg0: string): StrBuilder;
    deleteFirst(arg0: StrMatcher): StrBuilder;
    // private deleteImpl(arg0: number, arg1: number, arg2: number): void;
    endsWith(arg0: string): boolean;
    ensureCapacity(arg0: number): StrBuilder;
    equals(arg0: Object | null): boolean;
    equals(arg0: StrBuilder): boolean;
    equalsIgnoreCase(arg0: StrBuilder): boolean;
    get(arg0: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    getChars(arg0: string[]): string[];
    getNewLineText(): string;
    getNullText(): string;
    hashCode(): number;
    indexOf(arg0: string): number;
    indexOf(arg0: string, arg1: number): number;
    indexOf(arg0: StrMatcher): number;
    indexOf(arg0: StrMatcher, arg1: number): number;
    insert(arg0: number, arg1: Object): StrBuilder;
    insert(arg0: number, arg1: boolean): StrBuilder;
    insert(arg0: number, arg1: string): StrBuilder;
    insert(arg0: number, arg1: string[]): StrBuilder;
    insert(arg0: number, arg1: string[], arg2: number, arg3: number): StrBuilder;
    insert(arg0: number, arg1: number): StrBuilder;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
    lastIndexOf(arg0: string): number;
    lastIndexOf(arg0: string, arg1: number): number;
    lastIndexOf(arg0: StrMatcher): number;
    lastIndexOf(arg0: StrMatcher, arg1: number): number;
    leftString(arg0: number): string;
    midString(arg0: number, arg1: number): string;
    minimizeCapacity(): StrBuilder;
    readFrom(arg0: Readable): number;
    replace(arg0: number, arg1: number, arg2: string): StrBuilder;
    replace(arg0: StrMatcher, arg1: string, arg2: number, arg3: number, arg4: number): StrBuilder;
    replaceAll(arg0: string, arg1: string): StrBuilder;
    replaceAll(arg0: StrMatcher, arg1: string): StrBuilder;
    replaceFirst(arg0: string, arg1: string): StrBuilder;
    replaceFirst(arg0: StrMatcher, arg1: string): StrBuilder;
    // private replaceImpl(arg0: number, arg1: number, arg2: number, arg3: string, arg4: number): void;
    // private replaceImpl(arg0: StrMatcher, arg1: string, arg2: number, arg3: number, arg4: number): StrBuilder;
    reverse(): StrBuilder;
    rightString(arg0: number): string;
    setCharAt(arg0: number, arg1: string): StrBuilder;
    setLength(arg0: number): StrBuilder;
    setNewLineText(arg0: string): StrBuilder;
    setNullText(arg0: string): StrBuilder;
    size(): number;
    startsWith(arg0: string): boolean;
    subSequence(arg0: number, arg1: number): CharSequence;
    substring(arg0: number): string;
    substring(arg0: number, arg1: number): string;
    toCharArray(): string[];
    toCharArray(arg0: number, arg1: number): string[];
    toString(): string;
    toStringBuffer(): StringBuffer;
    toStringBuilder(): StringBuilder;
    trim(): StrBuilder;
    validateIndex(arg0: number): void;
    validateRange(arg0: number, arg1: number): number;
}