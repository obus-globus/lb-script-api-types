import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { AbstractStringBuilder } from '../../java/lang/AbstractStringBuilder.d.ts'
import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { StringBuffer } from '../../java/lang/StringBuffer.d.ts'
import type { IntStream } from '../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class StringBuilder extends AbstractStringBuilder implements Serializable, Appendable, CharSequence, Comparable<StringBuilder> {
    constructor()
    constructor(arg0: CharSequence)
    constructor(arg0: number)
    constructor(arg0: string)
    append(arg0: AbstractStringBuilder): AbstractStringBuilder;
    append(arg0: StringBuffer): StringBuilder;
    append(arg0: Object): StringBuilder;
    append(arg0: boolean): StringBuilder;
    append(arg0: string): StringBuilder;
    append(arg0: string[]): StringBuilder;
    append(arg0: string[], arg1: number, arg2: number): StringBuilder;
    append(arg0: CharSequence): StringBuilder;
    append(arg0: CharSequence, arg1: number, arg2: number): StringBuilder;
    append(arg0: number): StringBuilder;
    appendCodePoint(arg0: number): StringBuilder;
    chars(): IntStream;
    codePoints(): IntStream;
    compareTo(arg0: AbstractStringBuilder): number;
    compareTo(arg0: StringBuilder): number;
    delete(arg0: number, arg1: number): StringBuilder;
    deleteCharAt(arg0: number): StringBuilder;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    indexOf(arg0: string): number;
    indexOf(arg0: string, arg1: number): number;
    insert(arg0: number, arg1: Object): StringBuilder;
    insert(arg0: number, arg1: boolean): StringBuilder;
    insert(arg0: number, arg1: string): StringBuilder;
    insert(arg0: number, arg1: string[]): StringBuilder;
    insert(arg0: number, arg1: string[], arg2: number, arg3: number): StringBuilder;
    insert(arg0: number, arg1: CharSequence): StringBuilder;
    insert(arg0: number, arg1: CharSequence, arg2: number, arg3: number): StringBuilder;
    insert(arg0: number, arg1: number): StringBuilder;
    isEmpty(): boolean;
    lastIndexOf(arg0: string): number;
    lastIndexOf(arg0: string, arg1: number): number;
    // private readObject(arg0: ObjectInputStream): void;
    repeat(arg0: CharSequence, arg1: number): StringBuilder;
    repeat(arg0: number, arg1: number): StringBuilder;
    replace(arg0: number, arg1: number, arg2: string): StringBuilder;
    reverse(): StringBuilder;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}