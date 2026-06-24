import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV extends Struct<VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXGRAPHICSSHADERGROUPCOUNT: number;
    static MAXINDIRECTCOMMANDSSTREAMCOUNT: number;
    static MAXINDIRECTCOMMANDSSTREAMSTRIDE: number;
    static MAXINDIRECTCOMMANDSTOKENCOUNT: number;
    static MAXINDIRECTCOMMANDSTOKENOFFSET: number;
    static MAXINDIRECTSEQUENCECOUNT: number;
    static MININDIRECTCOMMANDSBUFFEROFFSETALIGNMENT: number;
    static MINSEQUENCESCOUNTBUFFEROFFSETALIGNMENT: number;
    static MINSEQUENCESINDEXBUFFEROFFSETALIGNMENT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV;
    static create(paramarg0: number): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxGraphicsShaderGroupCount(paramarg0: number): number;
    static nmaxIndirectCommandsStreamCount(paramarg0: number): number;
    static nmaxIndirectCommandsStreamStride(paramarg0: number): number;
    static nmaxIndirectCommandsTokenCount(paramarg0: number): number;
    static nmaxIndirectCommandsTokenOffset(paramarg0: number): number;
    static nmaxIndirectSequenceCount(paramarg0: number): number;
    static nminIndirectCommandsBufferOffsetAlignment(paramarg0: number): number;
    static nminSequencesCountBufferOffsetAlignment(paramarg0: number): number;
    static nminSequencesIndexBufferOffsetAlignment(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV;
    maxGraphicsShaderGroupCount(): number;
    maxIndirectCommandsStreamCount(): number;
    maxIndirectCommandsStreamStride(): number;
    maxIndirectCommandsTokenCount(): number;
    maxIndirectCommandsTokenOffset(): number;
    maxIndirectSequenceCount(): number;
    minIndirectCommandsBufferOffsetAlignment(): number;
    minSequencesCountBufferOffsetAlignment(): number;
    minSequencesIndexBufferOffsetAlignment(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV;
    sType$Default(): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV;
    set(arg0: number, arg1: number): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV;
    set(arg0: VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV): VkPhysicalDeviceDeviceGeneratedCommandsPropertiesNV;
    sizeof(): number;
}