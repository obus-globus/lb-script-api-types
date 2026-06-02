import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { StringBuffer } from '../../java/lang/StringBuffer.d.ts'
import type { IntStream } from '../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export class AbstractStringBuilder extends Object implements Appendable, CharSequence {
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    constructor()
    constructor(arg0: CharSequence)
    constructor(arg0: number)
    constructor(arg0: string)
    // private coder: number;
    // private count: number;
    readonly length: number;
    // private maybeLatin1: boolean;
    // private value: number[];
    append(arg0: AbstractStringBuilder): AbstractStringBuilder;
    append(arg0: StringBuffer): AbstractStringBuilder;
    append(arg0: Object): AbstractStringBuilder;
    append(arg0: boolean): AbstractStringBuilder;
    append(arg0: string): AbstractStringBuilder;
    append(arg0: string[]): AbstractStringBuilder;
    append(arg0: string[], arg1: number, arg2: number): AbstractStringBuilder;
    append(arg0: CharSequence): AbstractStringBuilder;
    append(arg0: CharSequence, arg1: number, arg2: number): AbstractStringBuilder;
    append(arg0: number): AbstractStringBuilder;
    append(arg0: number): AbstractStringBuilder;
    append(arg0: number): AbstractStringBuilder;
    append(arg0: number): AbstractStringBuilder;
    append(arg0: string): AbstractStringBuilder;
    appendCodePoint(arg0: number): AbstractStringBuilder;
    // private appendNull(): AbstractStringBuilder;
    capacity(): number;
    chars(): IntStream;
    chars(): IntStream;
    codePointAt(arg0: number): number;
    codePointBefore(arg0: number): number;
    codePointCount(arg0: number, arg1: number): number;
    codePoints(): IntStream;
    codePoints(): IntStream;
    compareTo(arg0: AbstractStringBuilder): number;
    delete(arg0: number, arg1: number): AbstractStringBuilder;
    deleteCharAt(arg0: number): AbstractStringBuilder;
    ensureCapacity(arg0: number): void;
    get(arg0: number): string;
    getBytes(arg0: number[], arg1: number, arg2: number): void;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    getCoder(): number;
    getValue(): number[];
    indexOf(arg0: string): number;
    indexOf(arg0: string, arg1: number): number;
    initBytes(arg0: string[], arg1: number, arg2: number): void;
    insert(arg0: number, arg1: Object): AbstractStringBuilder;
    insert(arg0: number, arg1: boolean): AbstractStringBuilder;
    insert(arg0: number, arg1: string): AbstractStringBuilder;
    insert(arg0: number, arg1: string[]): AbstractStringBuilder;
    insert(arg0: number, arg1: string[], arg2: number, arg3: number): AbstractStringBuilder;
    insert(arg0: number, arg1: CharSequence): AbstractStringBuilder;
    insert(arg0: number, arg1: CharSequence, arg2: number, arg3: number): AbstractStringBuilder;
    insert(arg0: number, arg1: number): AbstractStringBuilder;
    insert(arg0: number, arg1: number): AbstractStringBuilder;
    insert(arg0: number, arg1: number): AbstractStringBuilder;
    insert(arg0: number, arg1: number): AbstractStringBuilder;
    insert(arg0: number, arg1: string): AbstractStringBuilder;
    isEmpty(): boolean;
    isLatin1(): boolean;
    lastIndexOf(arg0: string): number;
    lastIndexOf(arg0: string, arg1: number): number;
    mix(arg0: number): number;
    offsetByCodePoints(arg0: number, arg1: number): number;
    prepend(arg0: number, arg1: number[]): number;
    // private repeat(arg0: string, arg1: number): AbstractStringBuilder;
    repeat(arg0: CharSequence, arg1: number): AbstractStringBuilder;
    repeat(arg0: number, arg1: number): AbstractStringBuilder;
    replace(arg0: number, arg1: number, arg2: string): AbstractStringBuilder;
    reverse(): AbstractStringBuilder;
    setCharAt(arg0: number, arg1: string): void;
    setLength(arg0: number): void;
    subSequence(arg0: number, arg1: number): CharSequence;
    substring(arg0: number): string;
    substring(arg0: number, arg1: number): string;
    toString(): string;
    trimToSize(): void;
}