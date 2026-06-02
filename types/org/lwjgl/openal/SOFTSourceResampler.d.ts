import type { Object } from '../../../java/lang/Object.d.ts'
export class SOFTSourceResampler extends Object {
    static AL_DEFAULT_RESAMPLER_SOFT: number;
    static AL_NUM_RESAMPLERS_SOFT: number;
    static AL_RESAMPLER_NAME_SOFT: number;
    static AL_SOURCE_RESAMPLER_SOFT: number;
    static alGetStringiDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number): string;
    static alGetStringiSOFT(paramarg0: number, paramarg1: number): string;
    static nalGetStringiDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nalGetStringiSOFT(paramarg0: number, paramarg1: number): number;
    constructor()
}