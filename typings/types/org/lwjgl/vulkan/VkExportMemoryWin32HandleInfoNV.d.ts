import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { SECURITY_ATTRIBUTES } from '../../../org/lwjgl/system/windows/SECURITY_ATTRIBUTES.d.ts'
export class VkExportMemoryWin32HandleInfoNV extends Struct<VkExportMemoryWin32HandleInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DWACCESS: number;
    static PATTRIBUTES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkExportMemoryWin32HandleInfoNV;
    static calloc(paramarg0: MemoryStack): VkExportMemoryWin32HandleInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExportMemoryWin32HandleInfoNV;
    static create(paramarg0: number): VkExportMemoryWin32HandleInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExportMemoryWin32HandleInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExportMemoryWin32HandleInfoNV;
    static malloc(paramarg0: MemoryStack): VkExportMemoryWin32HandleInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndwAccess(paramarg0: number): number;
    static ndwAccess(paramarg0: number, paramarg1: number): void;
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
    create(arg0: number, arg1: ByteBuffer): VkExportMemoryWin32HandleInfoNV;
    dwAccess(): number;
    dwAccess(arg0: number): VkExportMemoryWin32HandleInfoNV;
    pAttributes(): SECURITY_ATTRIBUTES;
    pAttributes(arg0: SECURITY_ATTRIBUTES): VkExportMemoryWin32HandleInfoNV;
    pNext(): number;
    pNext(arg0: number): VkExportMemoryWin32HandleInfoNV;
    sType(): number;
    sType(arg0: number): VkExportMemoryWin32HandleInfoNV;
    sType$Default(): VkExportMemoryWin32HandleInfoNV;
    set(arg0: number, arg1: number, arg2: SECURITY_ATTRIBUTES, arg3: number): VkExportMemoryWin32HandleInfoNV;
    set(arg0: VkExportMemoryWin32HandleInfoNV): VkExportMemoryWin32HandleInfoNV;
    sizeof(): number;
}