import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { SECURITY_ATTRIBUTES } from '../../../org/lwjgl/system/windows/SECURITY_ATTRIBUTES.d.ts'
export class VkExportSemaphoreWin32HandleInfoKHR extends Struct<VkExportSemaphoreWin32HandleInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DWACCESS: number;
    static NAME: number;
    static PATTRIBUTES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkExportSemaphoreWin32HandleInfoKHR;
    static calloc(paramarg0: MemoryStack): VkExportSemaphoreWin32HandleInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExportSemaphoreWin32HandleInfoKHR;
    static create(paramarg0: number): VkExportSemaphoreWin32HandleInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExportSemaphoreWin32HandleInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExportSemaphoreWin32HandleInfoKHR;
    static malloc(paramarg0: MemoryStack): VkExportSemaphoreWin32HandleInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndwAccess(paramarg0: number): number;
    static ndwAccess(paramarg0: number, paramarg1: number): void;
    static nname(paramarg0: number): ByteBuffer;
    static nname(paramarg0: number, paramarg1: ByteBuffer): void;
    static nnameString(paramarg0: number): string;
    static npAttributes(paramarg0: number): SECURITY_ATTRIBUTES;
    static npAttributes(paramarg0: number, paramarg1: SECURITY_ATTRIBUTES): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkExportSemaphoreWin32HandleInfoKHR;
    dwAccess(): number;
    dwAccess(arg0: number): VkExportSemaphoreWin32HandleInfoKHR;
    name(): ByteBuffer;
    name(arg0: ByteBuffer): VkExportSemaphoreWin32HandleInfoKHR;
    nameString(): string;
    pAttributes(): SECURITY_ATTRIBUTES;
    pAttributes(arg0: SECURITY_ATTRIBUTES): VkExportSemaphoreWin32HandleInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkExportSemaphoreWin32HandleInfoKHR;
    sType(): number;
    sType(arg0: number): VkExportSemaphoreWin32HandleInfoKHR;
    sType$Default(): VkExportSemaphoreWin32HandleInfoKHR;
    set(arg0: number, arg1: number, arg2: SECURITY_ATTRIBUTES, arg3: number, arg4: ByteBuffer): VkExportSemaphoreWin32HandleInfoKHR;
    set(arg0: VkExportSemaphoreWin32HandleInfoKHR): VkExportSemaphoreWin32HandleInfoKHR;
    sizeof(): number;
}