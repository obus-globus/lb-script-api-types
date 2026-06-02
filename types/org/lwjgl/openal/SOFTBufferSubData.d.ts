import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SOFTBufferSubData extends Object {
    static AL_BYTE_RW_OFFSETS_SOFT: number;
    static AL_SAMPLE_RW_OFFSETS_SOFT: number;
    static alBufferSubDataDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number): void;
    static alBufferSubDataDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number): void;
    static alBufferSubDataDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer, paramarg4: number): void;
    static alBufferSubDataDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: FloatBuffer, paramarg4: number): void;
    static alBufferSubDataDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: number): void;
    static alBufferSubDataDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ShortBuffer, paramarg4: number): void;
    static alBufferSubDataDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number): void;
    static alBufferSubDataSOFT(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number): void;
    static alBufferSubDataSOFT(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number): void;
    static alBufferSubDataSOFT(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: number): void;
    static alBufferSubDataSOFT(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer, paramarg3: number): void;
    static alBufferSubDataSOFT(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: number): void;
    static alBufferSubDataSOFT(paramarg0: number, paramarg1: number, paramarg2: ShortBuffer, paramarg3: number): void;
    static alBufferSubDataSOFT(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number): void;
    static nalBufferSubDataDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nalBufferSubDataSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}