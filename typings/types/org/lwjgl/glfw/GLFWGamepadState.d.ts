import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class GLFWGamepadState extends Struct<GLFWGamepadState> implements NativeResource {
    static ALIGNOF: number;
    static AXES: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUTTONS: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): GLFWGamepadState;
    static calloc(paramarg0: MemoryStack): GLFWGamepadState;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): GLFWGamepadState;
    static create(paramarg0: number): GLFWGamepadState;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): GLFWGamepadState;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): GLFWGamepadState;
    static malloc(paramarg0: MemoryStack): GLFWGamepadState;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naxes(paramarg0: number, paramarg1: number): number;
    static naxes(paramarg0: number): FloatBuffer;
    static naxes(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static naxes(paramarg0: number, paramarg1: FloatBuffer): void;
    static nbuttons(paramarg0: number, paramarg1: number): number;
    static nbuttons(paramarg0: number): ByteBuffer;
    static nbuttons(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nbuttons(paramarg0: number, paramarg1: ByteBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    axes(): FloatBuffer;
    axes(arg0: FloatBuffer): GLFWGamepadState;
    axes(arg0: number): number;
    axes(arg0: number, arg1: number): GLFWGamepadState;
    buttons(): ByteBuffer;
    buttons(arg0: ByteBuffer): GLFWGamepadState;
    buttons(arg0: number): number;
    buttons(arg0: number, arg1: number): GLFWGamepadState;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): GLFWGamepadState;
    set(arg0: ByteBuffer, arg1: FloatBuffer): GLFWGamepadState;
    set(arg0: GLFWGamepadState): GLFWGamepadState;
    sizeof(): number;
}