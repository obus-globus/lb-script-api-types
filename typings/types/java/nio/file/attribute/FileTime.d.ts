import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class FileTime extends Object implements Comparable<FileTime> {
    static from(paramarg0: Instant): FileTime;
    static from(paramarg0: number, paramarg1: TimeUnit): FileTime;
    static fromMillis(paramarg0: number): FileTime;
    private constructor(arg0: number, arg1: TimeUnit, arg2: Instant)
    // private instant: Instant;
    // private unit: TimeUnit;
    // private value: number;
    // private valueAsString: string;
    // private append(arg0: StringBuilder, arg1: number, arg2: number): StringBuilder;
    compareTo(arg0: FileTime): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    to(arg0: TimeUnit): number;
    // private toDays(): number;
    // private toExcessNanos(arg0: number): number;
    toInstant(): Instant;
    toMillis(): number;
    toString(): string;
}