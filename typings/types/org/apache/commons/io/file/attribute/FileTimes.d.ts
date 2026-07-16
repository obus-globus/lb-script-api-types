import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { FileTime } from '../../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FileTimes extends Object {
    static EPOCH: FileTime;
    static fromUnixTime(paramarg0: number): FileTime;
    static isUnixTime(paramarg0: FileTime): boolean;
    static isUnixTime(paramarg0: number): boolean;
    static minusMillis(paramarg0: FileTime, paramarg1: number): FileTime;
    static minusNanos(paramarg0: FileTime, paramarg1: number): FileTime;
    static minusSeconds(paramarg0: FileTime, paramarg1: number): FileTime;
    static now(): FileTime;
    static ntfsTimeToDate(paramarg0: number): Date;
    static ntfsTimeToFileTime(paramarg0: number): FileTime;
    static plusMillis(paramarg0: FileTime, paramarg1: number): FileTime;
    static plusNanos(paramarg0: FileTime, paramarg1: number): FileTime;
    static plusSeconds(paramarg0: FileTime, paramarg1: number): FileTime;
    static setLastModifiedTime(paramarg0: Path): void;
    static toDate(paramarg0: FileTime): Date;
    static toFileTime(paramarg0: Date): FileTime;
    static toNtfsTime(paramarg0: FileTime): number;
    static toNtfsTime(paramarg0: Date): number;
    static toNtfsTime(paramarg0: number): number;
    static toUnixTime(paramarg0: FileTime): number;
    private constructor()
}