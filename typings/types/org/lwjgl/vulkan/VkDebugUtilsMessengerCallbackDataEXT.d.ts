import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceAddressBindingCallbackDataEXT } from '../../../org/lwjgl/vulkan/VkDeviceAddressBindingCallbackDataEXT.d.ts'
export class VkDebugUtilsMessengerCallbackDataEXT extends Struct<VkDebugUtilsMessengerCallbackDataEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CMDBUFLABELCOUNT: number;
    static FLAGS: number;
    static MESSAGEIDNUMBER: number;
    static OBJECTCOUNT: number;
    static PCMDBUFLABELS: number;
    static PMESSAGE: number;
    static PMESSAGEIDNAME: number;
    static PNEXT: number;
    static POBJECTS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PQUEUELABELS: number;
    static QUEUELABELCOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDebugUtilsMessengerCallbackDataEXT;
    static calloc(paramarg0: MemoryStack): VkDebugUtilsMessengerCallbackDataEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDebugUtilsMessengerCallbackDataEXT;
    static create(paramarg0: number): VkDebugUtilsMessengerCallbackDataEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDebugUtilsMessengerCallbackDataEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDebugUtilsMessengerCallbackDataEXT;
    static malloc(paramarg0: MemoryStack): VkDebugUtilsMessengerCallbackDataEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncmdBufLabelCount(paramarg0: number): number;
    static ncmdBufLabelCount(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmessageIdNumber(paramarg0: number): number;
    static nmessageIdNumber(paramarg0: number, paramarg1: number): void;
    static nobjectCount(paramarg0: number): number;
    static nobjectCount(paramarg0: number, paramarg1: number): void;
    static npCmdBufLabels(paramarg0: number): (Object | null)[];
    static npCmdBufLabels(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npMessage(paramarg0: number): ByteBuffer;
    static npMessage(paramarg0: number, paramarg1: ByteBuffer): void;
    static npMessageIdName(paramarg0: number): ByteBuffer;
    static npMessageIdName(paramarg0: number, paramarg1: ByteBuffer): void;
    static npMessageIdNameString(paramarg0: number): string;
    static npMessageString(paramarg0: number): string;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npObjects(paramarg0: number): (Object | null)[];
    static npObjects(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npQueueLabels(paramarg0: number): (Object | null)[];
    static npQueueLabels(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nqueueLabelCount(paramarg0: number): number;
    static nqueueLabelCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    cmdBufLabelCount(): number;
    create(arg0: number, arg1: ByteBuffer): VkDebugUtilsMessengerCallbackDataEXT;
    flags(): number;
    flags(arg0: number): VkDebugUtilsMessengerCallbackDataEXT;
    messageIdNumber(): number;
    messageIdNumber(arg0: number): VkDebugUtilsMessengerCallbackDataEXT;
    objectCount(): number;
    pCmdBufLabels(): (Object | null)[];
    pCmdBufLabels(arg0: (Object | null)[]): VkDebugUtilsMessengerCallbackDataEXT;
    pMessage(): ByteBuffer;
    pMessage(arg0: ByteBuffer): VkDebugUtilsMessengerCallbackDataEXT;
    pMessageIdName(): ByteBuffer;
    pMessageIdName(arg0: ByteBuffer): VkDebugUtilsMessengerCallbackDataEXT;
    pMessageIdNameString(): string;
    pMessageString(): string;
    pNext(): number;
    pNext(arg0: number): VkDebugUtilsMessengerCallbackDataEXT;
    pNext(arg0: VkDeviceAddressBindingCallbackDataEXT): VkDebugUtilsMessengerCallbackDataEXT;
    pObjects(): (Object | null)[];
    pObjects(arg0: (Object | null)[]): VkDebugUtilsMessengerCallbackDataEXT;
    pQueueLabels(): (Object | null)[];
    pQueueLabels(arg0: (Object | null)[]): VkDebugUtilsMessengerCallbackDataEXT;
    queueLabelCount(): number;
    sType(): number;
    sType(arg0: number): VkDebugUtilsMessengerCallbackDataEXT;
    sType$Default(): VkDebugUtilsMessengerCallbackDataEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: ByteBuffer, arg4: number, arg5: ByteBuffer, arg6: (Object | null)[], arg7: (Object | null)[], arg8: (Object | null)[]): VkDebugUtilsMessengerCallbackDataEXT;
    set(arg0: VkDebugUtilsMessengerCallbackDataEXT): VkDebugUtilsMessengerCallbackDataEXT;
    sizeof(): number;
}