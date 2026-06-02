import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SegmentOptions extends Object {
    constructor(arg0: number)
    // private options: number;
    hasAllCodeFlags(): boolean;
    hasArchiveFileCounts(): boolean;
    hasCPNumberCounts(): boolean;
    hasClassFlagsHi(): boolean;
    hasCodeFlagsHi(): boolean;
    hasFieldFlagsHi(): boolean;
    hasFileModtime(): boolean;
    hasFileOptions(): boolean;
    hasFileSizeHi(): boolean;
    hasMethodFlagsHi(): boolean;
    hasSpecialFormats(): boolean;
    shouldDeflate(): boolean;
}