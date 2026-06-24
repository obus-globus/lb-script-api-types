import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceTransformFeedbackPropertiesEXT extends Struct<VkPhysicalDeviceTransformFeedbackPropertiesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXTRANSFORMFEEDBACKBUFFERDATASIZE: number;
    static MAXTRANSFORMFEEDBACKBUFFERDATASTRIDE: number;
    static MAXTRANSFORMFEEDBACKBUFFERS: number;
    static MAXTRANSFORMFEEDBACKBUFFERSIZE: number;
    static MAXTRANSFORMFEEDBACKSTREAMDATASIZE: number;
    static MAXTRANSFORMFEEDBACKSTREAMS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TRANSFORMFEEDBACKDRAW: number;
    static TRANSFORMFEEDBACKQUERIES: number;
    static TRANSFORMFEEDBACKRASTERIZATIONSTREAMSELECT: number;
    static TRANSFORMFEEDBACKSTREAMSLINESTRIANGLES: number;
    static calloc(): VkPhysicalDeviceTransformFeedbackPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceTransformFeedbackPropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceTransformFeedbackPropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceTransformFeedbackPropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceTransformFeedbackPropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceTransformFeedbackPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceTransformFeedbackPropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxTransformFeedbackBufferDataSize(paramarg0: number): number;
    static nmaxTransformFeedbackBufferDataStride(paramarg0: number): number;
    static nmaxTransformFeedbackBufferSize(paramarg0: number): number;
    static nmaxTransformFeedbackBuffers(paramarg0: number): number;
    static nmaxTransformFeedbackStreamDataSize(paramarg0: number): number;
    static nmaxTransformFeedbackStreams(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntransformFeedbackDraw(paramarg0: number): number;
    static ntransformFeedbackQueries(paramarg0: number): number;
    static ntransformFeedbackRasterizationStreamSelect(paramarg0: number): number;
    static ntransformFeedbackStreamsLinesTriangles(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceTransformFeedbackPropertiesEXT;
    maxTransformFeedbackBufferDataSize(): number;
    maxTransformFeedbackBufferDataStride(): number;
    maxTransformFeedbackBufferSize(): number;
    maxTransformFeedbackBuffers(): number;
    maxTransformFeedbackStreamDataSize(): number;
    maxTransformFeedbackStreams(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceTransformFeedbackPropertiesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceTransformFeedbackPropertiesEXT;
    sType$Default(): VkPhysicalDeviceTransformFeedbackPropertiesEXT;
    set(arg0: number, arg1: number): VkPhysicalDeviceTransformFeedbackPropertiesEXT;
    set(arg0: VkPhysicalDeviceTransformFeedbackPropertiesEXT): VkPhysicalDeviceTransformFeedbackPropertiesEXT;
    sizeof(): number;
    transformFeedbackDraw(): boolean;
    transformFeedbackQueries(): boolean;
    transformFeedbackRasterizationStreamSelect(): boolean;
    transformFeedbackStreamsLinesTriangles(): boolean;
}