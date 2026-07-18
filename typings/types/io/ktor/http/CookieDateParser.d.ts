import type { GMTDate } from '../../../io/ktor/util/date/GMTDate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CookieDateParser extends Object {
    constructor()
    // private checkFieldNotNull<T extends unknown>(source: string, name: string, field: T | null): void;
    // private checkRequirement(source: string, requirement: boolean, msg: () => string): void;
    parse(source: string): GMTDate;
}