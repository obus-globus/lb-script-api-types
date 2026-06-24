import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDebugReportCallbackEXT } from '../../../org/lwjgl/vulkan/VkDebugReportCallbackEXT.d.ts'
import type { VkDebugReportCallbackEXTI } from '../../../org/lwjgl/vulkan/VkDebugReportCallbackEXTI.d.ts'
export class VkDebugReportCallbackCreateInfoEXT extends Struct<VkDebugReportCallbackCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PFNCALLBACK: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PUSERDATA: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDebugReportCallbackCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDebugReportCallbackCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDebugReportCallbackCreateInfoEXT;
    static create(paramarg0: number): VkDebugReportCallbackCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDebugReportCallbackCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDebugReportCallbackCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDebugReportCallbackCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npUserData(paramarg0: number): number;
    static npUserData(paramarg0: number, paramarg1: number): void;
    static npfnCallback(paramarg0: number): VkDebugReportCallbackEXT;
    static npfnCallback(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number) => number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDebugReportCallbackCreateInfoEXT;
    flags(): number;
    flags(arg0: number): VkDebugReportCallbackCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkDebugReportCallbackCreateInfoEXT;
    pUserData(): number;
    pUserData(arg0: number): VkDebugReportCallbackCreateInfoEXT;
    pfnCallback(): VkDebugReportCallbackEXT;
    pfnCallback(arg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number) => number): VkDebugReportCallbackCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkDebugReportCallbackCreateInfoEXT;
    sType$Default(): VkDebugReportCallbackCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number) => number, arg4: number): VkDebugReportCallbackCreateInfoEXT;
    set(arg0: VkDebugReportCallbackCreateInfoEXT): VkDebugReportCallbackCreateInfoEXT;
    sizeof(): number;
}