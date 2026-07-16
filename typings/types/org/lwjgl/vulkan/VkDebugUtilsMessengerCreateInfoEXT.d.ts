import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDebugUtilsMessengerCallbackEXT } from '../../../org/lwjgl/vulkan/VkDebugUtilsMessengerCallbackEXT.d.ts'
import type { VkDebugUtilsMessengerCallbackEXTI } from '../../../org/lwjgl/vulkan/VkDebugUtilsMessengerCallbackEXTI.d.ts'
export class VkDebugUtilsMessengerCreateInfoEXT extends Struct<VkDebugUtilsMessengerCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MESSAGESEVERITY: number;
    static MESSAGETYPE: number;
    static PFNUSERCALLBACK: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PUSERDATA: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDebugUtilsMessengerCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDebugUtilsMessengerCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDebugUtilsMessengerCreateInfoEXT;
    static create(paramarg0: number): VkDebugUtilsMessengerCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDebugUtilsMessengerCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDebugUtilsMessengerCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDebugUtilsMessengerCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmessageSeverity(paramarg0: number): number;
    static nmessageSeverity(paramarg0: number, paramarg1: number): void;
    static nmessageType(paramarg0: number): number;
    static nmessageType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npUserData(paramarg0: number): number;
    static npUserData(paramarg0: number, paramarg1: number): void;
    static npfnUserCallback(paramarg0: number): VkDebugUtilsMessengerCallbackEXT;
    static npfnUserCallback(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number) => number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDebugUtilsMessengerCreateInfoEXT;
    flags(): number;
    flags(arg0: number): VkDebugUtilsMessengerCreateInfoEXT;
    messageSeverity(): number;
    messageSeverity(arg0: number): VkDebugUtilsMessengerCreateInfoEXT;
    messageType(): number;
    messageType(arg0: number): VkDebugUtilsMessengerCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkDebugUtilsMessengerCreateInfoEXT;
    pUserData(): number;
    pUserData(arg0: number): VkDebugUtilsMessengerCreateInfoEXT;
    pfnUserCallback(): VkDebugUtilsMessengerCallbackEXT;
    pfnUserCallback(arg0: (param0: number, param1: number, param2: number, param3: number) => number): VkDebugUtilsMessengerCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkDebugUtilsMessengerCreateInfoEXT;
    sType$Default(): VkDebugUtilsMessengerCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: (param0: number, param1: number, param2: number, param3: number) => number, arg6: number): VkDebugUtilsMessengerCreateInfoEXT;
    set(arg0: VkDebugUtilsMessengerCreateInfoEXT): VkDebugUtilsMessengerCreateInfoEXT;
    sizeof(): number;
}