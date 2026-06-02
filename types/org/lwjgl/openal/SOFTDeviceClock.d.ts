import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SOFTDeviceClock extends Object {
    static ALC_DEVICE_CLOCK_LATENCY_SOFT: number;
    static ALC_DEVICE_CLOCK_SOFT: number;
    static ALC_DEVICE_LATENCY_SOFT: number;
    static AL_SAMPLE_OFFSET_CLOCK_SOFT: number;
    static AL_SEC_OFFSET_CLOCK_SOFT: number;
    static alcGetInteger64vSOFT(paramarg0: number, paramarg1: number): number;
    static alcGetInteger64vSOFT(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static alcGetInteger64vSOFT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static nalcGetInteger64vSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}