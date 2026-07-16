import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../org/lwjgl/system/CallbackI.d.ts'
import type { VkDebugReportCallbackEXT } from '../../../org/lwjgl/vulkan/VkDebugReportCallbackEXT.d.ts'
import type { VkDebugReportCallbackEXTI } from '../../../org/lwjgl/vulkan/VkDebugReportCallbackEXTI.d.ts'
export class VkDebugReportCallbackEXT$Container extends VkDebugReportCallbackEXT {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): VkDebugReportCallbackEXT;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number) => number): VkDebugReportCallbackEXT;
    static createSafe(paramarg0: number): VkDebugReportCallbackEXT;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    static getString(paramarg0: number): string;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number) => number)
    // private delegate: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number) => number;
    invoke(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
}