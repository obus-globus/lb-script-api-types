import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class EXTCapture extends Object {
    static ALC_CAPTURE_DEFAULT_DEVICE_SPECIFIER: number;
    static ALC_CAPTURE_DEVICE_SPECIFIER: number;
    static ALC_CAPTURE_SAMPLES: number;
    static alcCaptureCloseDevice(paramarg0: number): boolean;
    static alcCaptureOpenDevice(paramarg0: CharSequence, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static alcCaptureOpenDevice(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static alcCaptureSamples(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static alcCaptureSamples(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static alcCaptureSamples(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number): void;
    static alcCaptureSamples(paramarg0: number, paramarg1: FloatBuffer, paramarg2: number): void;
    static alcCaptureSamples(paramarg0: number, paramarg1: IntBuffer, paramarg2: number): void;
    static alcCaptureSamples(paramarg0: number, paramarg1: ShortBuffer, paramarg2: number): void;
    static alcCaptureSamples(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static alcCaptureStart(paramarg0: number): void;
    static alcCaptureStop(paramarg0: number): void;
    static nalcCaptureOpenDevice(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nalcCaptureSamples(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}