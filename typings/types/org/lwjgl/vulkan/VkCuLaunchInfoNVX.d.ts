import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCuLaunchInfoNVX extends Struct<VkCuLaunchInfoNVX> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BLOCKDIMX: number;
    static BLOCKDIMY: number;
    static BLOCKDIMZ: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXTRACOUNT: number;
    static FUNCTION: number;
    static GRIDDIMX: number;
    static GRIDDIMY: number;
    static GRIDDIMZ: number;
    static PARAMCOUNT: number;
    static PEXTRAS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPARAMS: number;
    static SHAREDMEMBYTES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkCuLaunchInfoNVX;
    static calloc(paramarg0: MemoryStack): VkCuLaunchInfoNVX;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCuLaunchInfoNVX;
    static create(paramarg0: number): VkCuLaunchInfoNVX;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCuLaunchInfoNVX;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCuLaunchInfoNVX;
    static malloc(paramarg0: MemoryStack): VkCuLaunchInfoNVX;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nblockDimX(paramarg0: number): number;
    static nblockDimX(paramarg0: number, paramarg1: number): void;
    static nblockDimY(paramarg0: number): number;
    static nblockDimY(paramarg0: number, paramarg1: number): void;
    static nblockDimZ(paramarg0: number): number;
    static nblockDimZ(paramarg0: number, paramarg1: number): void;
    static nextraCount(paramarg0: number): number;
    static nextraCount(paramarg0: number, paramarg1: number): void;
    static nfunction(paramarg0: number): number;
    static nfunction(paramarg0: number, paramarg1: number): void;
    static ngridDimX(paramarg0: number): number;
    static ngridDimX(paramarg0: number, paramarg1: number): void;
    static ngridDimY(paramarg0: number): number;
    static ngridDimY(paramarg0: number, paramarg1: number): void;
    static ngridDimZ(paramarg0: number): number;
    static ngridDimZ(paramarg0: number, paramarg1: number): void;
    static npExtras(paramarg0: number): PointerBuffer;
    static npExtras(paramarg0: number, paramarg1: PointerBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npParams(paramarg0: number): PointerBuffer;
    static npParams(paramarg0: number, paramarg1: PointerBuffer): void;
    static nparamCount(paramarg0: number): number;
    static nparamCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsharedMemBytes(paramarg0: number): number;
    static nsharedMemBytes(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    blockDimX(): number;
    blockDimX(arg0: number): VkCuLaunchInfoNVX;
    blockDimY(): number;
    blockDimY(arg0: number): VkCuLaunchInfoNVX;
    blockDimZ(): number;
    blockDimZ(arg0: number): VkCuLaunchInfoNVX;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCuLaunchInfoNVX;
    extraCount(): number;
    function(): number;
    function(arg0: number): VkCuLaunchInfoNVX;
    gridDimX(): number;
    gridDimX(arg0: number): VkCuLaunchInfoNVX;
    gridDimY(): number;
    gridDimY(arg0: number): VkCuLaunchInfoNVX;
    gridDimZ(): number;
    gridDimZ(arg0: number): VkCuLaunchInfoNVX;
    pExtras(): PointerBuffer;
    pExtras(arg0: PointerBuffer): VkCuLaunchInfoNVX;
    pNext(): number;
    pNext(arg0: number): VkCuLaunchInfoNVX;
    pParams(): PointerBuffer;
    pParams(arg0: PointerBuffer): VkCuLaunchInfoNVX;
    paramCount(): number;
    sType(): number;
    sType(arg0: number): VkCuLaunchInfoNVX;
    sType$Default(): VkCuLaunchInfoNVX;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: PointerBuffer, arg11: PointerBuffer): VkCuLaunchInfoNVX;
    set(arg0: VkCuLaunchInfoNVX): VkCuLaunchInfoNVX;
    sharedMemBytes(): number;
    sharedMemBytes(arg0: number): VkCuLaunchInfoNVX;
    sizeof(): number;
}