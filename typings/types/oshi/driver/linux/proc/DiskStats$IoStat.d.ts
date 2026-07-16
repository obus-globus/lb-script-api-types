import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DiskStats$IoStat extends Enum<DiskStats$IoStat> {
    static DISCARDS: DiskStats$IoStat;
    static DISCARDS_MERGED: DiskStats$IoStat;
    static DISCARDS_MS: DiskStats$IoStat;
    static DISCARDS_SECTOR: DiskStats$IoStat;
    static FLUSHES: DiskStats$IoStat;
    static FLUSHES_MS: DiskStats$IoStat;
    static IO_MS: DiskStats$IoStat;
    static IO_MS_WEIGHTED: DiskStats$IoStat;
    static IO_QUEUE_LENGTH: DiskStats$IoStat;
    static MAJOR: DiskStats$IoStat;
    static MINOR: DiskStats$IoStat;
    static NAME: DiskStats$IoStat;
    static READS: DiskStats$IoStat;
    static READS_MERGED: DiskStats$IoStat;
    static READS_MS: DiskStats$IoStat;
    static READS_SECTOR: DiskStats$IoStat;
    static WRITES: DiskStats$IoStat;
    static WRITES_MERGED: DiskStats$IoStat;
    static WRITES_MS: DiskStats$IoStat;
    static WRITES_SECTOR: DiskStats$IoStat;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DiskStats$IoStat;
    static values(): DiskStats$IoStat[];
    private constructor()
    name(): "MAJOR" | "MINOR" | "NAME" | "READS" | "READS_MERGED" | "READS_SECTOR" | "READS_MS" | "WRITES" | "WRITES_MERGED" | "WRITES_SECTOR" | "WRITES_MS" | "IO_QUEUE_LENGTH" | "IO_MS" | "IO_MS_WEIGHTED" | "DISCARDS" | "DISCARDS_MERGED" | "DISCARDS_SECTOR" | "DISCARDS_MS" | "FLUSHES" | "FLUSHES_MS";
}