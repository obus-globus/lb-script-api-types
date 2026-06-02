import type { Date } from '../../../java/util/Date.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DateFormats extends Object {
    static formatIso8601(paramarg0: Date): string;
    static formatIso8601(paramarg0: Date, paramarg1: boolean): string;
    static parseIso8601Date(paramarg0: string): Date;
    private constructor()
}