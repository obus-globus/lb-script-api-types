import type { Pointer$Default } from '../../../org/lwjgl/system/Pointer$Default.d.ts'
import type { VKCapabilitiesInstance } from '../../../org/lwjgl/vulkan/VKCapabilitiesInstance.d.ts'
export abstract class DispatchableHandleInstance extends Pointer$Default {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    constructor(arg0: number, arg1: VKCapabilitiesInstance)
    readonly capabilities: VKCapabilitiesInstance;
    getCapabilities(): VKCapabilitiesInstance;
}