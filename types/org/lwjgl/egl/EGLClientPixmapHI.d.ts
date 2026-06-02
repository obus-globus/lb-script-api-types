import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class EGLClientPixmapHI extends Struct<EGLClientPixmapHI> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IHEIGHT: number;
    static ISTRIDE: number;
    static IWIDTH: number;
    static PDATA: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): EGLClientPixmapHI;
    static calloc(paramarg0: MemoryStack): EGLClientPixmapHI;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): EGLClientPixmapHI;
    static create(paramarg0: number): EGLClientPixmapHI;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): EGLClientPixmapHI;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): EGLClientPixmapHI;
    static malloc(paramarg0: MemoryStack): EGLClientPixmapHI;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static niHeight(paramarg0: number): number;
    static niHeight(paramarg0: number, paramarg1: number): void;
    static niStride(paramarg0: number): number;
    static niStride(paramarg0: number, paramarg1: number): void;
    static niWidth(paramarg0: number): number;
    static niWidth(paramarg0: number, paramarg1: number): void;
    static npData(paramarg0: number, paramarg1: number): ByteBuffer;
    static npData(paramarg0: number, paramarg1: ByteBuffer): void;
    static validate(paramarg0: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): EGLClientPixmapHI;
    iHeight(): number;
    iHeight(arg0: number): EGLClientPixmapHI;
    iStride(): number;
    iStride(arg0: number): EGLClientPixmapHI;
    iWidth(): number;
    iWidth(arg0: number): EGLClientPixmapHI;
    pData(arg0: ByteBuffer): EGLClientPixmapHI;
    pData(arg0: number): ByteBuffer;
    set(arg0: ByteBuffer, arg1: number, arg2: number, arg3: number): EGLClientPixmapHI;
    set(arg0: EGLClientPixmapHI): EGLClientPixmapHI;
    sizeof(): number;
}