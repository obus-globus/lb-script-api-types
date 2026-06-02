import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class NVStreamMetadata extends Object {
    static EGL_CONSUMER_METADATA_NV: number;
    static EGL_MAX_STREAM_METADATA_BLOCKS_NV: number;
    static EGL_MAX_STREAM_METADATA_BLOCK_SIZE_NV: number;
    static EGL_MAX_STREAM_METADATA_TOTAL_SIZE_NV: number;
    static EGL_METADATA0_SIZE_NV: number;
    static EGL_METADATA0_TYPE_NV: number;
    static EGL_METADATA1_SIZE_NV: number;
    static EGL_METADATA1_TYPE_NV: number;
    static EGL_METADATA2_SIZE_NV: number;
    static EGL_METADATA2_TYPE_NV: number;
    static EGL_METADATA3_SIZE_NV: number;
    static EGL_METADATA3_TYPE_NV: number;
    static EGL_PENDING_METADATA_NV: number;
    static EGL_PRODUCER_METADATA_NV: number;
    static eglQueryDisplayAttribNV(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): boolean;
    static eglQueryStreamMetadataNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: ByteBuffer): boolean;
    static eglSetStreamMetadataNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): boolean;
    static neglQueryDisplayAttribNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static neglQueryStreamMetadataNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    static neglSetStreamMetadataNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    constructor()
}