import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBTextureCompression extends Object {
    static GL_COMPRESSED_ALPHA_ARB: number;
    static GL_COMPRESSED_INTENSITY_ARB: number;
    static GL_COMPRESSED_LUMINANCE_ALPHA_ARB: number;
    static GL_COMPRESSED_LUMINANCE_ARB: number;
    static GL_COMPRESSED_RGBA_ARB: number;
    static GL_COMPRESSED_RGB_ARB: number;
    static GL_COMPRESSED_TEXTURE_FORMATS_ARB: number;
    static GL_NUM_COMPRESSED_TEXTURE_FORMATS_ARB: number;
    static GL_TEXTURE_COMPRESSED_ARB: number;
    static GL_TEXTURE_COMPRESSED_IMAGE_SIZE_ARB: number;
    static GL_TEXTURE_COMPRESSION_HINT_ARB: number;
    static glCompressedTexImage1DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static glCompressedTexImage1DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): void;
    static glCompressedTexImage2DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    static glCompressedTexImage2DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: ByteBuffer): void;
    static glCompressedTexImage3DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): void;
    static glCompressedTexImage3DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: ByteBuffer): void;
    static glCompressedTexSubImage1DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static glCompressedTexSubImage1DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: ByteBuffer): void;
    static glCompressedTexSubImage2DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): void;
    static glCompressedTexSubImage2DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: ByteBuffer): void;
    static glCompressedTexSubImage3DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number): void;
    static glCompressedTexSubImage3DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: ByteBuffer): void;
    static glGetCompressedTexImageARB(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static glGetCompressedTexImageARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglCompressedTexImage1DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static nglCompressedTexImage2DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    static nglCompressedTexImage3DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): void;
    static nglCompressedTexSubImage1DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static nglCompressedTexSubImage2DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): void;
    static nglCompressedTexSubImage3DARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number): void;
    static nglGetCompressedTexImageARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}