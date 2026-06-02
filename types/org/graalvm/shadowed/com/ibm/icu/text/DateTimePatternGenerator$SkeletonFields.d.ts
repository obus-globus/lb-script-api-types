import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DateTimePatternGenerator$SkeletonFields extends Object {
    private constructor()
    // private chars: number[];
    // private lengths: number[];
    appendFieldTo(field: number, sb: StringBuilder): StringBuilder;
    // private appendFieldTo(field: number, sb: StringBuilder, canonical: boolean): StringBuilder;
    appendTo(sb: StringBuilder): StringBuilder;
    // private appendTo(sb: StringBuilder, canonical: boolean, skipDayPeriod: boolean): StringBuilder;
    clear(): void;
    clearField(field: number): void;
    compareTo(other: DateTimePatternGenerator$SkeletonFields): number;
    copyFieldFrom(other: DateTimePatternGenerator$SkeletonFields, field: number): void;
    equals(other: Object | null): boolean;
    getFieldChar(field: number): string;
    getFieldLength(field: number): number;
    hashCode(): number;
    isFieldEmpty(field: number): boolean;
    populate(field: number, ch: string, length: number): void;
    populate(field: number, value: string): void;
    toCanonicalString(): string;
    toCanonicalString(skipDayPeriod: boolean): string;
    toString(): string;
    toString(skipDayPeriod: boolean): string;
}