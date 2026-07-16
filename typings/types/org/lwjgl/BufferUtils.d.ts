import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../java/nio/CharBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../java/nio/LongBuffer.d.ts'
import type { ShortBuffer } from '../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CLongBuffer } from '../../org/lwjgl/CLongBuffer.d.ts'
import type { PointerBuffer } from '../../org/lwjgl/PointerBuffer.d.ts'
import type { CustomBuffer } from '../../org/lwjgl/system/CustomBuffer.d.ts'
export class BufferUtils extends Object {
    static createByteBuffer(paramarg0: number): ByteBuffer;
    static createCLongBuffer(paramarg0: number): CLongBuffer;
    static createCharBuffer(paramarg0: number): CharBuffer;
    static createDoubleBuffer(paramarg0: number): DoubleBuffer;
    static createFloatBuffer(paramarg0: number): FloatBuffer;
    static createIntBuffer(paramarg0: number): IntBuffer;
    static createLongBuffer(paramarg0: number): LongBuffer;
    static createPointerBuffer(paramarg0: number): PointerBuffer;
    static createShortBuffer(paramarg0: number): ShortBuffer;
    static zeroBuffer<T extends CustomBuffer<T>>(paramarg0: T): void;
    static zeroBuffer(paramarg0: ByteBuffer): void;
    static zeroBuffer(paramarg0: CharBuffer): void;
    static zeroBuffer(paramarg0: DoubleBuffer): void;
    static zeroBuffer(paramarg0: FloatBuffer): void;
    static zeroBuffer(paramarg0: IntBuffer): void;
    static zeroBuffer(paramarg0: LongBuffer): void;
    static zeroBuffer(paramarg0: ShortBuffer): void;
    private constructor()
}