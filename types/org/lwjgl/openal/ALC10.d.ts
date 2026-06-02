import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class ALC10 extends Object {
    static ALC_ALL_ATTRIBUTES: number;
    static ALC_ATTRIBUTES_SIZE: number;
    static ALC_DEFAULT_DEVICE_SPECIFIER: number;
    static ALC_DEVICE_SPECIFIER: number;
    static ALC_EXTENSIONS: number;
    static ALC_FALSE: number;
    static ALC_FREQUENCY: number;
    static ALC_INVALID: number;
    static ALC_INVALID_CONTEXT: number;
    static ALC_INVALID_DEVICE: number;
    static ALC_INVALID_ENUM: number;
    static ALC_INVALID_VALUE: number;
    static ALC_MAJOR_VERSION: number;
    static ALC_MINOR_VERSION: number;
    static ALC_NO_ERROR: number;
    static ALC_OUT_OF_MEMORY: number;
    static ALC_REFRESH: number;
    static ALC_SYNC: number;
    static ALC_TRUE: number;
    static alcCloseDevice(paramarg0: number): boolean;
    static alcCreateContext(paramarg0: number, paramarg1: number[]): number;
    static alcCreateContext(paramarg0: number, paramarg1: IntBuffer): number;
    static alcDestroyContext(paramarg0: number): void;
    static alcGetContextsDevice(paramarg0: number): number;
    static alcGetCurrentContext(): number;
    static alcGetEnumValue(paramarg0: number, paramarg1: CharSequence): number;
    static alcGetEnumValue(paramarg0: number, paramarg1: ByteBuffer): number;
    static alcGetError(paramarg0: number): number;
    static alcGetInteger(paramarg0: number, paramarg1: number): number;
    static alcGetIntegerv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static alcGetIntegerv(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static alcGetProcAddress(paramarg0: number, paramarg1: CharSequence): number;
    static alcGetProcAddress(paramarg0: number, paramarg1: ByteBuffer): number;
    static alcGetString(paramarg0: number, paramarg1: number): string;
    static alcIsExtensionPresent(paramarg0: number, paramarg1: CharSequence): boolean;
    static alcIsExtensionPresent(paramarg0: number, paramarg1: ByteBuffer): boolean;
    static alcMakeContextCurrent(paramarg0: number): boolean;
    static alcOpenDevice(paramarg0: CharSequence): number;
    static alcOpenDevice(paramarg0: ByteBuffer): number;
    static alcProcessContext(paramarg0: number): void;
    static alcSuspendContext(paramarg0: number): void;
    static nalcCreateContext(paramarg0: number, paramarg1: number): number;
    static nalcGetEnumValue(paramarg0: number, paramarg1: number): number;
    static nalcGetIntegerv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nalcGetProcAddress(paramarg0: number, paramarg1: number): number;
    static nalcGetString(paramarg0: number, paramarg1: number): number;
    static nalcIsExtensionPresent(paramarg0: number, paramarg1: number): boolean;
    static nalcOpenDevice(paramarg0: number): number;
    constructor()
}