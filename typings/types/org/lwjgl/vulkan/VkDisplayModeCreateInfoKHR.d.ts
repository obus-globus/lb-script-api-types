import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDisplayModeParametersKHR } from '../../../org/lwjgl/vulkan/VkDisplayModeParametersKHR.d.ts'
export class VkDisplayModeCreateInfoKHR extends Struct<VkDisplayModeCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PARAMETERS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDisplayModeCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkDisplayModeCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDisplayModeCreateInfoKHR;
    static create(paramarg0: number): VkDisplayModeCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDisplayModeCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDisplayModeCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkDisplayModeCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nparameters(paramarg0: number): VkDisplayModeParametersKHR;
    static nparameters(paramarg0: number, paramarg1: VkDisplayModeParametersKHR): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDisplayModeCreateInfoKHR;
    flags(): number;
    flags(arg0: number): VkDisplayModeCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkDisplayModeCreateInfoKHR;
    parameters(): VkDisplayModeParametersKHR;
    parameters(arg0: (param0: VkDisplayModeParametersKHR) => void): VkDisplayModeCreateInfoKHR;
    parameters(arg0: VkDisplayModeParametersKHR): VkDisplayModeCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkDisplayModeCreateInfoKHR;
    sType$Default(): VkDisplayModeCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: VkDisplayModeParametersKHR): VkDisplayModeCreateInfoKHR;
    set(arg0: VkDisplayModeCreateInfoKHR): VkDisplayModeCreateInfoKHR;
    sizeof(): number;
}