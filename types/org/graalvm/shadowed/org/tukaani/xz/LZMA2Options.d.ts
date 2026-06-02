import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { FilterEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterEncoder.d.ts'
import type { FilterOptions } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterOptions.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
export class LZMA2Options extends FilterOptions {
    static DICT_SIZE_DEFAULT: number;
    static DICT_SIZE_MAX: number;
    static DICT_SIZE_MIN: number;
    static LC_DEFAULT: number;
    static LC_LP_MAX: number;
    static LP_DEFAULT: number;
    static MF_BT4: number;
    static MF_HC4: number;
    static MODE_FAST: number;
    static MODE_NORMAL: number;
    static MODE_UNCOMPRESSED: number;
    static NICE_LEN_MAX: number;
    static NICE_LEN_MIN: number;
    static PB_DEFAULT: number;
    static PB_MAX: number;
    static PRESET_DEFAULT: number;
    static PRESET_MAX: number;
    static PRESET_MIN: number;
    static getDecoderMemoryUsage(paramoptions: (Object | null)[]): number;
    static getEncoderMemoryUsage(paramoptions: (Object | null)[]): number;
    constructor()
    constructor(preset: number)
    constructor(dictSize: number, lc: number, lp: number, pb: number, mode: number, niceLen: number, mf: number, depthLimit: number)
    readonly depthLimit: number;
    readonly dictSize: number;
    readonly lc: number;
    readonly lp: number;
    // private mf: number;
    readonly mode: number;
    readonly niceLen: number;
    readonly pb: number;
    readonly presetDict: number[];
    clone(): Object;
    getDecoderMemoryUsage(): number;
    getDepthLimit(): number;
    getDictSize(): number;
    getEncoderMemoryUsage(): number;
    getFilterEncoder(): FilterEncoder;
    getInputStream(in_: InputStream, arrayCache: ArrayCache): InputStream;
    getLc(): number;
    getLp(): number;
    getMatchFinder(): number;
    getMode(): number;
    getNiceLen(): number;
    getOutputStream(out: FinishableOutputStream, arrayCache: ArrayCache): FinishableOutputStream;
    getPb(): number;
    getPresetDict(): number[];
    setDepthLimit(depthLimit: number): void;
    setDictSize(dictSize: number): void;
    setLc(lc: number): void;
    setLcLp(lc: number, lp: number): void;
    setLp(lp: number): void;
    setMatchFinder(mf: number): void;
    setMode(mode: number): void;
    setNiceLen(niceLen: number): void;
    setPb(pb: number): void;
    setPreset(preset: number): void;
    setPresetDict(presetDict: number[]): void;
}