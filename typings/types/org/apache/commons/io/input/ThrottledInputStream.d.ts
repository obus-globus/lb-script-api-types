import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { CountingInputStream } from '../../../../../org/apache/commons/io/input/CountingInputStream.d.ts'
import type { ThrottledInputStream$Builder } from '../../../../../org/apache/commons/io/input/ThrottledInputStream$Builder.d.ts'
export class ThrottledInputStream extends CountingInputStream {
    static builder(): ThrottledInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: ThrottledInputStream$Builder, arg1: any)
    // private maxBytesPerSecond: number;
    // private startTime: number;
    // private totalSleepDuration: Duration;
    beforeRead(arg0: number): void;
    // private getBytesPerSecond(): number;
    getMaxBytesPerSecond(): number;
    // private getSleepMillis(): number;
    getTotalSleepDuration(): Duration;
    // private throttle(): void;
    toString(): string;
}