import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT extends Struct<VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEGENERATEDCOMMANDSMULTIDRAWINDIRECTCOUNT: number;
    static DEVICEGENERATEDCOMMANDSTRANSFORMFEEDBACK: number;
    static MAXINDIRECTCOMMANDSINDIRECTSTRIDE: number;
    static MAXINDIRECTCOMMANDSTOKENCOUNT: number;
    static MAXINDIRECTCOMMANDSTOKENOFFSET: number;
    static MAXINDIRECTPIPELINECOUNT: number;
    static MAXINDIRECTSEQUENCECOUNT: number;
    static MAXINDIRECTSHADEROBJECTCOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUPPORTEDINDIRECTCOMMANDSINPUTMODES: number;
    static SUPPORTEDINDIRECTCOMMANDSSHADERSTAGES: number;
    static SUPPORTEDINDIRECTCOMMANDSSHADERSTAGESPIPELINEBINDING: number;
    static SUPPORTEDINDIRECTCOMMANDSSHADERSTAGESSHADERBINDING: number;
    static calloc(): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndeviceGeneratedCommandsMultiDrawIndirectCount(paramarg0: number): number;
    static ndeviceGeneratedCommandsTransformFeedback(paramarg0: number): number;
    static nmaxIndirectCommandsIndirectStride(paramarg0: number): number;
    static nmaxIndirectCommandsTokenCount(paramarg0: number): number;
    static nmaxIndirectCommandsTokenOffset(paramarg0: number): number;
    static nmaxIndirectPipelineCount(paramarg0: number): number;
    static nmaxIndirectSequenceCount(paramarg0: number): number;
    static nmaxIndirectShaderObjectCount(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsupportedIndirectCommandsInputModes(paramarg0: number): number;
    static nsupportedIndirectCommandsShaderStages(paramarg0: number): number;
    static nsupportedIndirectCommandsShaderStagesPipelineBinding(paramarg0: number): number;
    static nsupportedIndirectCommandsShaderStagesShaderBinding(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT;
    deviceGeneratedCommandsMultiDrawIndirectCount(): boolean;
    deviceGeneratedCommandsTransformFeedback(): boolean;
    maxIndirectCommandsIndirectStride(): number;
    maxIndirectCommandsTokenCount(): number;
    maxIndirectCommandsTokenOffset(): number;
    maxIndirectPipelineCount(): number;
    maxIndirectSequenceCount(): number;
    maxIndirectShaderObjectCount(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT;
    sType$Default(): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT;
    set(arg0: number, arg1: number): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT;
    set(arg0: VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesEXT;
    sizeof(): number;
    supportedIndirectCommandsInputModes(): number;
    supportedIndirectCommandsShaderStages(): number;
    supportedIndirectCommandsShaderStagesPipelineBinding(): number;
    supportedIndirectCommandsShaderStagesShaderBinding(): number;
}