import type { FileTime } from '../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TimeUtils extends Object {
    static isUnixTime(paramarg0: FileTime): boolean;
    static isUnixTime(paramarg0: number): boolean;
    static ntfsTimeToDate(paramarg0: number): Date;
    static ntfsTimeToFileTime(paramarg0: number): FileTime;
    static toDate(paramarg0: FileTime): Date;
    static toFileTime(paramarg0: Date): FileTime;
    static toNtfsTime(paramarg0: FileTime): number;
    static toNtfsTime(paramarg0: Date): number;
    static toNtfsTime(paramarg0: number): number;
    static toUnixTime(paramarg0: FileTime): number;
    static truncateToHundredNanos(paramarg0: FileTime): FileTime;
    static unixTimeToFileTime(paramarg0: number): FileTime;
    private constructor()
}