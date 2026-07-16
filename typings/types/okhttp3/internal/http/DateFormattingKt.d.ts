import type { Date } from '../../../java/util/Date.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DateFormattingKt extends Object {
    static MAX_DATE: number;
    static toHttpDateOrNull(self: string): Date | null;
    static toHttpDateString(self: Date): string;
}