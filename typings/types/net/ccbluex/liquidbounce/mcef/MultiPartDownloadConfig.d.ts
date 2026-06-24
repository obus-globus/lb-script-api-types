import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MultiPartDownloadConfig extends Record {
    static DEFAULT: MultiPartDownloadConfig;
    static DEFAULT_MAX_CONCURRENCY: number;
    static DEFAULT_MAX_PART_RETRIES: number;
    static DEFAULT_MIN_PART_SIZE_BYTES: number;
    static DEFAULT_RETRY_BACKOFF_MILLIS: number;
    static DISABLED: MultiPartDownloadConfig;
    constructor(arg0: boolean, arg1: number, arg2: number)
    constructor(enabled: boolean, maxConcurrency: number, minPartSizeBytes: number, maxPartRetries: number, retryBackoffMillis: number)
    // private enabled: boolean;
    // private maxConcurrency: number;
    // private maxPartRetries: number;
    // private minPartSizeBytes: number;
    // private retryBackoffMillis: number;
    enabled(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    maxConcurrency(): number;
    maxPartRetries(): number;
    minPartSizeBytes(): number;
    retryBackoffMillis(): number;
    toString(): string;
}