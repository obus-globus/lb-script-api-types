import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { AbstractStringBuilder } from '../../java/lang/AbstractStringBuilder.d.ts'
import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { IntStream } from '../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class StringBuffer extends AbstractStringBuilder implements Serializable, Appendable, CharSequence, Comparable<StringBuffer> {
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    constructor()
    constructor(arg0: CharSequence)
    constructor(arg0: number)
    constructor(arg0: string)
    readonly length: number;
    // private toStringCache: string;
    append(arg0: AbstractStringBuilder): StringBuffer;
    append(arg0: StringBuffer): StringBuffer;
    append(arg0: Object): StringBuffer;
    append(arg0: boolean): StringBuffer;
    append(arg0: string): StringBuffer;
    append(arg0: string[]): StringBuffer;
    append(arg0: string[], arg1: number, arg2: number): StringBuffer;
    append(arg0: CharSequence): StringBuffer;
    append(arg0: CharSequence, arg1: number, arg2: number): StringBuffer;
    append(arg0: number): StringBuffer;
    append(arg0: number): StringBuffer;
    append(arg0: number): StringBuffer;
    append(arg0: number): StringBuffer;
    append(arg0: string): StringBuffer;
    appendCodePoint(arg0: number): StringBuffer;
    capacity(): number;
    chars(): IntStream;
    codePointAt(arg0: number): number;
    codePointBefore(arg0: number): number;
    codePointCount(arg0: number, arg1: number): number;
    codePoints(): IntStream;
    compareTo(arg0: AbstractStringBuilder): number;
    compareTo(arg0: StringBuffer): number;
    delete(arg0: number, arg1: number): StringBuffer;
    deleteCharAt(arg0: number): StringBuffer;
    ensureCapacity(arg0: number): void;
    get(arg0: number): string;
    getBytes(arg0: number[], arg1: number, arg2: number): void;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    indexOf(arg0: string): number;
    indexOf(arg0: string, arg1: number): number;
    insert(arg0: number, arg1: Object): StringBuffer;
    insert(arg0: number, arg1: boolean): StringBuffer;
    insert(arg0: number, arg1: string): StringBuffer;
    insert(arg0: number, arg1: string[]): StringBuffer;
    insert(arg0: number, arg1: string[], arg2: number, arg3: number): StringBuffer;
    insert(arg0: number, arg1: CharSequence): StringBuffer;
    insert(arg0: number, arg1: CharSequence, arg2: number, arg3: number): StringBuffer;
    insert(arg0: number, arg1: number): StringBuffer;
    insert(arg0: number, arg1: number): StringBuffer;
    insert(arg0: number, arg1: number): StringBuffer;
    insert(arg0: number, arg1: number): StringBuffer;
    insert(arg0: number, arg1: string): StringBuffer;
    isEmpty(): boolean;
    lastIndexOf(arg0: string): number;
    lastIndexOf(arg0: string, arg1: number): number;
    offsetByCodePoints(arg0: number, arg1: number): number;
    // private readObject(arg0: ObjectInputStream): void;
    repeat(arg0: CharSequence, arg1: number): StringBuffer;
    repeat(arg0: number, arg1: number): StringBuffer;
    replace(arg0: number, arg1: number, arg2: string): StringBuffer;
    reverse(): StringBuffer;
    setCharAt(arg0: number, arg1: string): void;
    setLength(arg0: number): void;
    subSequence(arg0: number, arg1: number): CharSequence;
    substring(arg0: number): string;
    substring(arg0: number, arg1: number): string;
    toString(): string;
    trimToSize(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}