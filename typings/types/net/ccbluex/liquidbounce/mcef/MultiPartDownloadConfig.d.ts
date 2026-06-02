import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MultiPartDownloadConfig extends Record {
    static DEFAULT: MultiPartDownloadConfig;
    static DEFAULT_MAX_CONCURRENCY: number;
    static DEFAULT_MIN_PART_SIZE_BYTES: number;
    static DISABLED: MultiPartDownloadConfig;
    // private enabled: boolean;
    // private maxConcurrency: number;
    // private minPartSizeBytes: number;
    enabled(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    maxConcurrency(): number;
    minPartSizeBytes(): number;
    toString(): string;
}