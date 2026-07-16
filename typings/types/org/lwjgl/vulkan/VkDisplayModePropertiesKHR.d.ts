import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDisplayModeParametersKHR } from '../../../org/lwjgl/vulkan/VkDisplayModeParametersKHR.d.ts'
export class VkDisplayModePropertiesKHR extends Struct<VkDisplayModePropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISPLAYMODE: number;
    static PARAMETERS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkDisplayModePropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkDisplayModePropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDisplayModePropertiesKHR;
    static create(paramarg0: number): VkDisplayModePropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDisplayModePropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDisplayModePropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkDisplayModePropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndisplayMode(paramarg0: number): number;
    static nparameters(paramarg0: number): VkDisplayModeParametersKHR;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDisplayModePropertiesKHR;
    displayMode(): number;
    parameters(): VkDisplayModeParametersKHR;
    sizeof(): number;
}