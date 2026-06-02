import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Duration } from '../../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FileIOStat$Summary } from '../../../../../../net/minecraft/util/profiling/jfr/stats/FileIOStat$Summary.d.ts'
export class FileIOStat extends Record {
    static summary(paramrecordingDuration: Duration, paramioStats: FileIOStat[]): FileIOStat$Summary;
    // private bytes: number;
    // private duration: Duration;
    // private path: string;
    bytes(): number;
    duration(): Duration;
    equals(o: Object | null): boolean;
    hashCode(): number;
    path(): string;
    toString(): string;
}