import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT extends Struct<VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRIMITIVESGENERATEDQUERY: number;
    static PRIMITIVESGENERATEDQUERYWITHNONZEROSTREAMS: number;
    static PRIMITIVESGENERATEDQUERYWITHRASTERIZERDISCARD: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nprimitivesGeneratedQuery(paramarg0: number): number;
    static nprimitivesGeneratedQuery(paramarg0: number, paramarg1: number): void;
    static nprimitivesGeneratedQueryWithNonZeroStreams(paramarg0: number): number;
    static nprimitivesGeneratedQueryWithNonZeroStreams(paramarg0: number, paramarg1: number): void;
    static nprimitivesGeneratedQueryWithRasterizerDiscard(paramarg0: number): number;
    static nprimitivesGeneratedQueryWithRasterizerDiscard(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    primitivesGeneratedQuery(): boolean;
    primitivesGeneratedQuery(arg0: boolean): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    primitivesGeneratedQueryWithNonZeroStreams(): boolean;
    primitivesGeneratedQueryWithNonZeroStreams(arg0: boolean): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    primitivesGeneratedQueryWithRasterizerDiscard(): boolean;
    primitivesGeneratedQueryWithRasterizerDiscard(arg0: boolean): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    sType$Default(): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    set(arg0: VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT): VkPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT;
    sizeof(): number;
}