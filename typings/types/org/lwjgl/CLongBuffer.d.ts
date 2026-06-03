import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { CustomBuffer } from '../../org/lwjgl/system/CustomBuffer.d.ts'
export class CLongBuffer extends CustomBuffer<CLongBuffer> implements Comparable<CLongBuffer> {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static allocateDirect(paramarg0: number): CLongBuffer;
    static create(paramarg0: ByteBuffer): CLongBuffer;
    static create(paramarg0: number, paramarg1: number): CLongBuffer;
    static get(paramarg0: ByteBuffer): number;
    static get(paramarg0: ByteBuffer, paramarg1: number): number;
    static put(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): void;
    static put(paramarg0: ByteBuffer, paramarg1: number): void;
    constructor(arg0: number, arg1: ByteBuffer, arg2: number, arg3: number, arg4: number, arg5: number)
    compareTo(arg0: CLongBuffer): number;
    create(arg0: number, arg1: ByteBuffer, arg2: number, arg3: number, arg4: number, arg5: number): CLongBuffer;
    equals(arg0: Object | null): boolean;
    get(): number;
    get(arg0: number): number;
    get(arg0: number[]): CLongBuffer;
    get(arg0: number[], arg1: number, arg2: number): CLongBuffer;
    // private get32(arg0: number[], arg1: number, arg2: number): void;
    hashCode(): number;
    put(arg0: number, arg1: number): CLongBuffer;
    put(arg0: number): CLongBuffer;
    put(arg0: number[]): CLongBuffer;
    put(arg0: number[], arg1: number, arg2: number): CLongBuffer;
    put(arg0: CLongBuffer): CLongBuffer;
    // private put32(arg0: number[], arg1: number, arg2: number): void;
    self(): CLongBuffer;
    sizeof(): number;
}