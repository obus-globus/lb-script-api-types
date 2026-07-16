import type { Callback } from '../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../org/lwjgl/system/CallbackI.d.ts'
import type { VkDeviceMemoryReportCallbackEXTI } from '../../../org/lwjgl/vulkan/VkDeviceMemoryReportCallbackEXTI.d.ts'
export abstract class VkDeviceMemoryReportCallbackEXT extends Callback implements VkDeviceMemoryReportCallbackEXTI {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): VkDeviceMemoryReportCallbackEXT;
    static create(paramarg0: (param0: number, param1: number) => void): VkDeviceMemoryReportCallbackEXT;
    static createSafe(paramarg0: number): VkDeviceMemoryReportCallbackEXT;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
    invoke(arg0: number, arg1: number): void;
}