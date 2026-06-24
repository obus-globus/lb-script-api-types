import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkRayTracingShaderGroupCreateInfoKHR extends Struct<VkRayTracingShaderGroupCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static ANYHITSHADER: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CLOSESTHITSHADER: number;
    static GENERALSHADER: number;
    static INTERSECTIONSHADER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSHADERGROUPCAPTUREREPLAYHANDLE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TYPE: number;
    static calloc(): VkRayTracingShaderGroupCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkRayTracingShaderGroupCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRayTracingShaderGroupCreateInfoKHR;
    static create(paramarg0: number): VkRayTracingShaderGroupCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRayTracingShaderGroupCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRayTracingShaderGroupCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkRayTracingShaderGroupCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nanyHitShader(paramarg0: number): number;
    static nanyHitShader(paramarg0: number, paramarg1: number): void;
    static nclosestHitShader(paramarg0: number): number;
    static nclosestHitShader(paramarg0: number, paramarg1: number): void;
    static ngeneralShader(paramarg0: number): number;
    static ngeneralShader(paramarg0: number, paramarg1: number): void;
    static nintersectionShader(paramarg0: number): number;
    static nintersectionShader(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npShaderGroupCaptureReplayHandle(paramarg0: number): number;
    static npShaderGroupCaptureReplayHandle(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    anyHitShader(): number;
    anyHitShader(arg0: number): VkRayTracingShaderGroupCreateInfoKHR;
    close(): void;
    closestHitShader(): number;
    closestHitShader(arg0: number): VkRayTracingShaderGroupCreateInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkRayTracingShaderGroupCreateInfoKHR;
    generalShader(): number;
    generalShader(arg0: number): VkRayTracingShaderGroupCreateInfoKHR;
    intersectionShader(): number;
    intersectionShader(arg0: number): VkRayTracingShaderGroupCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkRayTracingShaderGroupCreateInfoKHR;
    pShaderGroupCaptureReplayHandle(): number;
    pShaderGroupCaptureReplayHandle(arg0: number): VkRayTracingShaderGroupCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkRayTracingShaderGroupCreateInfoKHR;
    sType$Default(): VkRayTracingShaderGroupCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): VkRayTracingShaderGroupCreateInfoKHR;
    set(arg0: VkRayTracingShaderGroupCreateInfoKHR): VkRayTracingShaderGroupCreateInfoKHR;
    sizeof(): number;
    type(): number;
    type(arg0: number): VkRayTracingShaderGroupCreateInfoKHR;
}