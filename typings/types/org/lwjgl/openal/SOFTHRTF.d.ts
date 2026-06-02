import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SOFTHRTF extends Object {
    static ALC_DONT_CARE_SOFT: number;
    static ALC_HRTF_DENIED_SOFT: number;
    static ALC_HRTF_DISABLED_SOFT: number;
    static ALC_HRTF_ENABLED_SOFT: number;
    static ALC_HRTF_HEADPHONES_DETECTED_SOFT: number;
    static ALC_HRTF_ID_SOFT: number;
    static ALC_HRTF_REQUIRED_SOFT: number;
    static ALC_HRTF_SOFT: number;
    static ALC_HRTF_SPECIFIER_SOFT: number;
    static ALC_HRTF_STATUS_SOFT: number;
    static ALC_HRTF_UNSUPPORTED_FORMAT_SOFT: number;
    static ALC_NUM_HRTF_SPECIFIERS_SOFT: number;
    static alcGetStringiSOFT(paramarg0: number, paramarg1: number, paramarg2: number): string;
    static alcResetDeviceSOFT(paramarg0: number, paramarg1: number[]): boolean;
    static alcResetDeviceSOFT(paramarg0: number, paramarg1: IntBuffer): boolean;
    static nalcGetStringiSOFT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nalcResetDeviceSOFT(paramarg0: number, paramarg1: number): boolean;
    constructor()
}