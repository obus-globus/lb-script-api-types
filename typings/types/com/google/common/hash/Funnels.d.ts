import type { Funnel } from '../../../../com/google/common/hash/Funnel.d.ts'
import type { PrimitiveSink } from '../../../../com/google/common/hash/PrimitiveSink.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Funnels extends Object {
    static asOutputStream(paramsink: PrimitiveSink): OutputStream;
    static byteArrayFunnel(): Funnel<number[]>;
    static integerFunnel(): Funnel<number>;
    static longFunnel(): Funnel<number>;
    static sequentialFunnel(paramelementFunnel: Funnel<Object>): Funnel<(Object | null)[]>;
    static stringFunnel(paramcharset: Charset): Funnel<CharSequence>;
    static unencodedCharsFunnel(): Funnel<CharSequence>;
    private constructor()
}