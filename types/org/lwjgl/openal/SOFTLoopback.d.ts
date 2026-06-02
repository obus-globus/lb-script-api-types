import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class SOFTLoopback extends Object {
    static ALC_5POINT1_SOFT: number;
    static ALC_6POINT1_SOFT: number;
    static ALC_7POINT1_SOFT: number;
    static ALC_BYTE_SOFT: number;
    static ALC_FLOAT_SOFT: number;
    static ALC_FORMAT_CHANNELS_SOFT: number;
    static ALC_FORMAT_TYPE_SOFT: number;
    static ALC_INT_SOFT: number;
    static ALC_MONO_SOFT: number;
    static ALC_QUAD_SOFT: number;
    static ALC_SHORT_SOFT: number;
    static ALC_STEREO_SOFT: number;
    static ALC_UNSIGNED_BYTE_SOFT: number;
    static ALC_UNSIGNED_INT_SOFT: number;
    static ALC_UNSIGNED_SHORT_SOFT: number;
    static alcIsRenderFormatSupportedSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): boolean;
    static alcLoopbackOpenDeviceSOFT(paramarg0: CharSequence): number;
    static alcLoopbackOpenDeviceSOFT(paramarg0: ByteBuffer): number;
    static alcRenderSamplesSOFT(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static alcRenderSamplesSOFT(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static alcRenderSamplesSOFT(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number): void;
    static alcRenderSamplesSOFT(paramarg0: number, paramarg1: FloatBuffer, paramarg2: number): void;
    static alcRenderSamplesSOFT(paramarg0: number, paramarg1: IntBuffer, paramarg2: number): void;
    static alcRenderSamplesSOFT(paramarg0: number, paramarg1: ShortBuffer, paramarg2: number): void;
    static alcRenderSamplesSOFT(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static nalcLoopbackOpenDeviceSOFT(paramarg0: number): number;
    static nalcRenderSamplesSOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}