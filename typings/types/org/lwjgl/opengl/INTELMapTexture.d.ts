import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class INTELMapTexture extends Object {
    static GL_LAYOUT_DEFAULT_INTEL: number;
    static GL_LAYOUT_LINEAR_CPU_CACHED_INTEL: number;
    static GL_LAYOUT_LINEAR_INTEL: number;
    static GL_TEXTURE_MEMORY_LAYOUT_INTEL: number;
    static glMapTexture2DINTEL(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number[]): ByteBuffer;
    static glMapTexture2DINTEL(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number[], paramarg5: ByteBuffer): ByteBuffer;
    static glMapTexture2DINTEL(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number[], paramarg5: number, paramarg6: ByteBuffer): ByteBuffer;
    static glMapTexture2DINTEL(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: IntBuffer): ByteBuffer;
    static glMapTexture2DINTEL(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: IntBuffer, paramarg5: ByteBuffer): ByteBuffer;
    static glMapTexture2DINTEL(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: IntBuffer, paramarg5: number, paramarg6: ByteBuffer): ByteBuffer;
    static glSyncTextureINTEL(paramarg0: number): void;
    static glUnmapTexture2DINTEL(paramarg0: number, paramarg1: number): void;
    static nglMapTexture2DINTEL(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    constructor()
}