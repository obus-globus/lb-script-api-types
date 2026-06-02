import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DateTimePatternGenerator$SkeletonFields extends Object {
    private constructor()
    // private chars: number[];
    // private lengths: number[];
    appendFieldTo(arg0: number, arg1: StringBuilder): StringBuilder;
    // private appendFieldTo(arg0: number, arg1: StringBuilder, arg2: boolean): StringBuilder;
    appendTo(arg0: StringBuilder): StringBuilder;
    // private appendTo(arg0: StringBuilder, arg1: boolean, arg2: boolean): StringBuilder;
    clear(): void;
    clearField(arg0: number): void;
    compareTo(arg0: DateTimePatternGenerator$SkeletonFields): number;
    copyFieldFrom(arg0: DateTimePatternGenerator$SkeletonFields, arg1: number): void;
    equals(arg0: Object | null): boolean;
    getFieldChar(arg0: number): string;
    getFieldLength(arg0: number): number;
    hashCode(): number;
    isFieldEmpty(arg0: number): boolean;
    populate(arg0: number, arg1: string, arg2: number): void;
    populate(arg0: number, arg1: string): void;
    toCanonicalString(): string;
    toCanonicalString(arg0: boolean): string;
    toString(): string;
    toString(arg0: boolean): string;
}