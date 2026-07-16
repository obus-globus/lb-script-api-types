import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { CLongBuffer } from '../../../org/lwjgl/CLongBuffer.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Pointer } from '../../../org/lwjgl/system/Pointer.d.ts'
export class MemoryStack$DebugMemoryStack extends MemoryStack {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(): MemoryStack;
    static create(paramarg0: number): MemoryStack;
    static create(paramarg0: ByteBuffer): MemoryStack;
    static ncreate(paramarg0: number, paramarg1: number): MemoryStack;
    static nstackCalloc(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nstackMalloc(paramarg0: number): number;
    static nstackMalloc(paramarg0: number, paramarg1: number): number;
    static stackASCII(paramarg0: CharSequence): ByteBuffer;
    static stackASCII(paramarg0: CharSequence, paramarg1: boolean): ByteBuffer;
    static stackASCIISafe(paramarg0: CharSequence): ByteBuffer;
    static stackASCIISafe(paramarg0: CharSequence, paramarg1: boolean): ByteBuffer;
    static stackBytes(paramarg0: number): ByteBuffer;
    static stackBytes(paramarg0: number, paramarg1: number): ByteBuffer;
    static stackBytes(paramarg0: number, paramarg1: number, paramarg2: number): ByteBuffer;
    static stackBytes(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): ByteBuffer;
    static stackBytes(...paramarg0: number[]): ByteBuffer;
    static stackCLongs(paramarg0: number): CLongBuffer;
    static stackCLongs(paramarg0: number, paramarg1: number): CLongBuffer;
    static stackCLongs(paramarg0: number, paramarg1: number, paramarg2: number): CLongBuffer;
    static stackCLongs(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): CLongBuffer;
    static stackCLongs(...paramarg0: number[]): CLongBuffer;
    static stackCalloc(paramarg0: number): ByteBuffer;
    static stackCallocCLong(paramarg0: number): CLongBuffer;
    static stackCallocDouble(paramarg0: number): DoubleBuffer;
    static stackCallocFloat(paramarg0: number): FloatBuffer;
    static stackCallocInt(paramarg0: number): IntBuffer;
    static stackCallocLong(paramarg0: number): LongBuffer;
    static stackCallocPointer(paramarg0: number): PointerBuffer;
    static stackCallocShort(paramarg0: number): ShortBuffer;
    static stackDoubles(paramarg0: number): DoubleBuffer;
    static stackDoubles(paramarg0: number, paramarg1: number): DoubleBuffer;
    static stackDoubles(paramarg0: number, paramarg1: number, paramarg2: number): DoubleBuffer;
    static stackDoubles(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): DoubleBuffer;
    static stackDoubles(...paramarg0: number[]): DoubleBuffer;
    static stackFloats(paramarg0: number): FloatBuffer;
    static stackFloats(paramarg0: number, paramarg1: number): FloatBuffer;
    static stackFloats(paramarg0: number, paramarg1: number, paramarg2: number): FloatBuffer;
    static stackFloats(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): FloatBuffer;
    static stackFloats(...paramarg0: number[]): FloatBuffer;
    static stackGet(): MemoryStack;
    static stackInts(paramarg0: number): IntBuffer;
    static stackInts(paramarg0: number, paramarg1: number): IntBuffer;
    static stackInts(paramarg0: number, paramarg1: number, paramarg2: number): IntBuffer;
    static stackInts(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): IntBuffer;
    static stackInts(...paramarg0: number[]): IntBuffer;
    static stackLongs(paramarg0: number): LongBuffer;
    static stackLongs(paramarg0: number, paramarg1: number): LongBuffer;
    static stackLongs(paramarg0: number, paramarg1: number, paramarg2: number): LongBuffer;
    static stackLongs(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): LongBuffer;
    static stackLongs(...paramarg0: number[]): LongBuffer;
    static stackMalloc(paramarg0: number): ByteBuffer;
    static stackMallocCLong(paramarg0: number): CLongBuffer;
    static stackMallocDouble(paramarg0: number): DoubleBuffer;
    static stackMallocFloat(paramarg0: number): FloatBuffer;
    static stackMallocInt(paramarg0: number): IntBuffer;
    static stackMallocLong(paramarg0: number): LongBuffer;
    static stackMallocPointer(paramarg0: number): PointerBuffer;
    static stackMallocShort(paramarg0: number): ShortBuffer;
    static stackPointers(paramarg0: number): PointerBuffer;
    static stackPointers(paramarg0: number, paramarg1: number): PointerBuffer;
    static stackPointers(paramarg0: number, paramarg1: number, paramarg2: number): PointerBuffer;
    static stackPointers(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): PointerBuffer;
    static stackPointers(...paramarg0: number[]): PointerBuffer;
    static stackPointers(paramarg0: Pointer): PointerBuffer;
    static stackPointers(paramarg0: Pointer, paramarg1: Pointer): PointerBuffer;
    static stackPointers(paramarg0: Pointer, paramarg1: Pointer, paramarg2: Pointer): PointerBuffer;
    static stackPointers(paramarg0: Pointer, paramarg1: Pointer, paramarg2: Pointer, paramarg3: Pointer): PointerBuffer;
    static stackPointers(...paramarg0: Pointer[]): PointerBuffer;
    static stackPop(): MemoryStack;
    static stackPush(): MemoryStack;
    static stackShorts(paramarg0: number): ShortBuffer;
    static stackShorts(paramarg0: number, paramarg1: number): ShortBuffer;
    static stackShorts(paramarg0: number, paramarg1: number, paramarg2: number): ShortBuffer;
    static stackShorts(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): ShortBuffer;
    static stackShorts(...paramarg0: number[]): ShortBuffer;
    static stackUTF16(paramarg0: CharSequence): ByteBuffer;
    static stackUTF16(paramarg0: CharSequence, paramarg1: boolean): ByteBuffer;
    static stackUTF16Safe(paramarg0: CharSequence): ByteBuffer;
    static stackUTF16Safe(paramarg0: CharSequence, paramarg1: boolean): ByteBuffer;
    static stackUTF8(paramarg0: CharSequence): ByteBuffer;
    static stackUTF8(paramarg0: CharSequence, paramarg1: boolean): ByteBuffer;
    static stackUTF8Safe(paramarg0: CharSequence): ByteBuffer;
    static stackUTF8Safe(paramarg0: CharSequence, paramarg1: boolean): ByteBuffer;
    constructor(arg0: ByteBuffer, arg1: number, arg2: number)
    // private debugFrames: Object[];
    close(): void;
    // private frameOverflow(): void;
    pop(): MemoryStack;
    push(): MemoryStack;
}