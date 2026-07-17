import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { Readable } from '../../java/lang/Readable.d.ts'
import type { MemorySegment } from '../../java/lang/foreign/MemorySegment.d.ts'
import type { Buffer } from '../../java/nio/Buffer.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class CharBuffer extends Buffer implements Appendable, Readable, CharSequence, Comparable<CharBuffer> {
    static allocate(paramarg0: number): CharBuffer;
    static wrap(paramarg0: string[]): CharBuffer;
    static wrap(paramarg0: string[], paramarg1: number, paramarg2: number): CharBuffer;
    static wrap(paramarg0: CharSequence): CharBuffer;
    static wrap(paramarg0: CharSequence, paramarg1: number, paramarg2: number): CharBuffer;
    constructor(arg0: string[], arg1: number, arg2: number, arg3: MemorySegment)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: MemorySegment)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string[], arg5: number, arg6: MemorySegment)
}