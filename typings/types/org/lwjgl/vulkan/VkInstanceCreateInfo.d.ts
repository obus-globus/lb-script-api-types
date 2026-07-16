import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkApplicationInfo } from '../../../org/lwjgl/vulkan/VkApplicationInfo.d.ts'
import type { VkDebugReportCallbackCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkDebugReportCallbackCreateInfoEXT.d.ts'
import type { VkDebugUtilsMessengerCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkDebugUtilsMessengerCreateInfoEXT.d.ts'
import type { VkDirectDriverLoadingListLUNARG } from '../../../org/lwjgl/vulkan/VkDirectDriverLoadingListLUNARG.d.ts'
import type { VkExportMetalObjectCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkExportMetalObjectCreateInfoEXT.d.ts'
import type { VkLayerSettingsCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkLayerSettingsCreateInfoEXT.d.ts'
import type { VkValidationFeaturesEXT } from '../../../org/lwjgl/vulkan/VkValidationFeaturesEXT.d.ts'
import type { VkValidationFlagsEXT } from '../../../org/lwjgl/vulkan/VkValidationFlagsEXT.d.ts'
export class VkInstanceCreateInfo extends Struct<VkInstanceCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static ENABLEDEXTENSIONCOUNT: number;
    static ENABLEDLAYERCOUNT: number;
    static FLAGS: number;
    static PAPPLICATIONINFO: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPENABLEDEXTENSIONNAMES: number;
    static PPENABLEDLAYERNAMES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkInstanceCreateInfo;
    static calloc(paramarg0: MemoryStack): VkInstanceCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkInstanceCreateInfo;
    static create(paramarg0: number): VkInstanceCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkInstanceCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkInstanceCreateInfo;
    static malloc(paramarg0: MemoryStack): VkInstanceCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nenabledExtensionCount(paramarg0: number): number;
    static nenabledExtensionCount(paramarg0: number, paramarg1: number): void;
    static nenabledLayerCount(paramarg0: number): number;
    static nenabledLayerCount(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npApplicationInfo(paramarg0: number): VkApplicationInfo;
    static npApplicationInfo(paramarg0: number, paramarg1: VkApplicationInfo): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nppEnabledExtensionNames(paramarg0: number): PointerBuffer;
    static nppEnabledExtensionNames(paramarg0: number, paramarg1: PointerBuffer): void;
    static nppEnabledLayerNames(paramarg0: number): PointerBuffer;
    static nppEnabledLayerNames(paramarg0: number, paramarg1: PointerBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkInstanceCreateInfo;
    enabledExtensionCount(): number;
    enabledLayerCount(): number;
    flags(): number;
    flags(arg0: number): VkInstanceCreateInfo;
    pApplicationInfo(): VkApplicationInfo;
    pApplicationInfo(arg0: VkApplicationInfo): VkInstanceCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkInstanceCreateInfo;
    pNext(arg0: VkDebugReportCallbackCreateInfoEXT): VkInstanceCreateInfo;
    pNext(arg0: VkDebugUtilsMessengerCreateInfoEXT): VkInstanceCreateInfo;
    pNext(arg0: VkDirectDriverLoadingListLUNARG): VkInstanceCreateInfo;
    pNext(arg0: VkExportMetalObjectCreateInfoEXT): VkInstanceCreateInfo;
    pNext(arg0: VkLayerSettingsCreateInfoEXT): VkInstanceCreateInfo;
    pNext(arg0: VkValidationFeaturesEXT): VkInstanceCreateInfo;
    pNext(arg0: VkValidationFlagsEXT): VkInstanceCreateInfo;
    ppEnabledExtensionNames(): PointerBuffer;
    ppEnabledExtensionNames(arg0: PointerBuffer): VkInstanceCreateInfo;
    ppEnabledLayerNames(): PointerBuffer;
    ppEnabledLayerNames(arg0: PointerBuffer): VkInstanceCreateInfo;
    sType(): number;
    sType(arg0: number): VkInstanceCreateInfo;
    sType$Default(): VkInstanceCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: VkApplicationInfo, arg4: PointerBuffer, arg5: PointerBuffer): VkInstanceCreateInfo;
    set(arg0: VkInstanceCreateInfo): VkInstanceCreateInfo;
    sizeof(): number;
}