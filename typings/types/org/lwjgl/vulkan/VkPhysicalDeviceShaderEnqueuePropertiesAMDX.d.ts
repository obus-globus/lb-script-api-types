import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShaderEnqueuePropertiesAMDX extends Struct<VkPhysicalDeviceShaderEnqueuePropertiesAMDX> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXECUTIONGRAPHDISPATCHADDRESSALIGNMENT: number;
    static MAXEXECUTIONGRAPHDEPTH: number;
    static MAXEXECUTIONGRAPHSHADEROUTPUTNODES: number;
    static MAXEXECUTIONGRAPHSHADERPAYLOADCOUNT: number;
    static MAXEXECUTIONGRAPHSHADERPAYLOADSIZE: number;
    static MAXEXECUTIONGRAPHWORKGROUPCOUNT: number;
    static MAXEXECUTIONGRAPHWORKGROUPS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderEnqueuePropertiesAMDX;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderEnqueuePropertiesAMDX;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderEnqueuePropertiesAMDX;
    static create(paramarg0: number): VkPhysicalDeviceShaderEnqueuePropertiesAMDX;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderEnqueuePropertiesAMDX;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderEnqueuePropertiesAMDX;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderEnqueuePropertiesAMDX;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nexecutionGraphDispatchAddressAlignment(paramarg0: number): number;
    static nmaxExecutionGraphDepth(paramarg0: number): number;
    static nmaxExecutionGraphShaderOutputNodes(paramarg0: number): number;
    static nmaxExecutionGraphShaderPayloadCount(paramarg0: number): number;
    static nmaxExecutionGraphShaderPayloadSize(paramarg0: number): number;
    static nmaxExecutionGraphWorkgroupCount(paramarg0: number, paramarg1: number): number;
    static nmaxExecutionGraphWorkgroupCount(paramarg0: number): IntBuffer;
    static nmaxExecutionGraphWorkgroups(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderEnqueuePropertiesAMDX;
    executionGraphDispatchAddressAlignment(): number;
    maxExecutionGraphDepth(): number;
    maxExecutionGraphShaderOutputNodes(): number;
    maxExecutionGraphShaderPayloadCount(): number;
    maxExecutionGraphShaderPayloadSize(): number;
    maxExecutionGraphWorkgroupCount(): IntBuffer;
    maxExecutionGraphWorkgroupCount(arg0: number): number;
    maxExecutionGraphWorkgroups(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderEnqueuePropertiesAMDX;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderEnqueuePropertiesAMDX;
    sType$Default(): VkPhysicalDeviceShaderEnqueuePropertiesAMDX;
    set(arg0: number, arg1: number): VkPhysicalDeviceShaderEnqueuePropertiesAMDX;
    set(arg0: VkPhysicalDeviceShaderEnqueuePropertiesAMDX): VkPhysicalDeviceShaderEnqueuePropertiesAMDX;
    sizeof(): number;
}