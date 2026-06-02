import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { STBIWriteCallbackI } from '../../../org/lwjgl/stb/STBIWriteCallbackI.d.ts'
export class STBImageWrite extends Object {
    static stbi_write_force_png_filter: IntBuffer;
    static stbi_write_png_compression_level: IntBuffer;
    static stbi_write_tga_with_rle: IntBuffer;
    static stbi_zlib_compress: PointerBuffer;
    static nstbi_flip_vertically_on_write(paramarg0: number): void;
    static nstbi_write_bmp(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nstbi_write_bmp_to_func(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nstbi_write_hdr(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[]): number;
    static nstbi_write_hdr(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nstbi_write_hdr_to_func(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number[]): number;
    static nstbi_write_hdr_to_func(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nstbi_write_jpg(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nstbi_write_jpg_to_func(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    static nstbi_write_png(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nstbi_write_png_to_func(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    static nstbi_write_tga(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nstbi_write_tga_to_func(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static stbi_flip_vertically_on_write(paramarg0: boolean): void;
    static stbi_write_bmp(paramarg0: CharSequence, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): boolean;
    static stbi_write_bmp(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): boolean;
    static stbi_write_bmp_to_func(paramarg0: (param0: number, param1: number, param2: number) => void, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: ByteBuffer): boolean;
    static stbi_write_hdr(paramarg0: CharSequence, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[]): boolean;
    static stbi_write_hdr(paramarg0: CharSequence, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: FloatBuffer): boolean;
    static stbi_write_hdr(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[]): boolean;
    static stbi_write_hdr(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: FloatBuffer): boolean;
    static stbi_write_hdr_to_func(paramarg0: (param0: number, param1: number, param2: number) => void, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number[]): boolean;
    static stbi_write_hdr_to_func(paramarg0: (param0: number, param1: number, param2: number) => void, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: FloatBuffer): boolean;
    static stbi_write_jpg(paramarg0: CharSequence, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer, paramarg5: number): boolean;
    static stbi_write_jpg(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer, paramarg5: number): boolean;
    static stbi_write_jpg_to_func(paramarg0: (param0: number, param1: number, param2: number) => void, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: ByteBuffer, paramarg6: number): number;
    static stbi_write_png(paramarg0: CharSequence, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer, paramarg5: number): boolean;
    static stbi_write_png(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer, paramarg5: number): boolean;
    static stbi_write_png_to_func(paramarg0: (param0: number, param1: number, param2: number) => void, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: ByteBuffer, paramarg6: number): boolean;
    static stbi_write_tga(paramarg0: CharSequence, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): boolean;
    static stbi_write_tga(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): boolean;
    static stbi_write_tga_to_func(paramarg0: (param0: number, param1: number, param2: number) => void, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: ByteBuffer): boolean;
    constructor()
}