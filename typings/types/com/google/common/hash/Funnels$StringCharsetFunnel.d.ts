import type { Funnel } from '../../../../com/google/common/hash/Funnel.d.ts'
import type { PrimitiveSink } from '../../../../com/google/common/hash/PrimitiveSink.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Funnels$StringCharsetFunnel extends Object implements Funnel<CharSequence> {
    constructor(charset: Charset)
    // private charset: Charset;
    equals(o: Object | null): boolean;
    funnel(from: CharSequence, into: PrimitiveSink): void;
    hashCode(): number;
    // private readObject(stream: ObjectInputStream): void;
    toString(): string;
    writeReplace(): Object;
}