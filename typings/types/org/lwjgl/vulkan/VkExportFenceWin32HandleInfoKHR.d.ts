import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { SECURITY_ATTRIBUTES } from '../../../org/lwjgl/system/windows/SECURITY_ATTRIBUTES.d.ts'
export class VkExportFenceWin32HandleInfoKHR extends Struct<VkExportFenceWin32HandleInfoKHR> implements NativeResource {
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
    static calloc(): VkExportFenceWin32HandleInfoKHR;
    static calloc(paramarg0: MemoryStack): VkExportFenceWin32HandleInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExportFenceWin32HandleInfoKHR;
    static create(paramarg0: number): VkExportFenceWin32HandleInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExportFenceWin32HandleInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExportFenceWin32HandleInfoKHR;
    static malloc(paramarg0: MemoryStack): VkExportFenceWin32HandleInfoKHR;
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
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkExportFenceWin32HandleInfoKHR;
    dwAccess(): number;
    dwAccess(arg0: number): VkExportFenceWin32HandleInfoKHR;
    name(): ByteBuffer;
    name(arg0: ByteBuffer): VkExportFenceWin32HandleInfoKHR;
    nameString(): string;
    pAttributes(): SECURITY_ATTRIBUTES;
    pAttributes(arg0: SECURITY_ATTRIBUTES): VkExportFenceWin32HandleInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkExportFenceWin32HandleInfoKHR;
    sType(): number;
    sType(arg0: number): VkExportFenceWin32HandleInfoKHR;
    sType$Default(): VkExportFenceWin32HandleInfoKHR;
    set(arg0: number, arg1: number, arg2: SECURITY_ATTRIBUTES, arg3: number, arg4: ByteBuffer): VkExportFenceWin32HandleInfoKHR;
    set(arg0: VkExportFenceWin32HandleInfoKHR): VkExportFenceWin32HandleInfoKHR;
    sizeof(): number;
}