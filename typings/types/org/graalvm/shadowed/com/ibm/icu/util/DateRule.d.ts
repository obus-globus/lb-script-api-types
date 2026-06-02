import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface DateRule extends Object{
    firstAfter(start: Date): Date;
    firstBetween(start: Date, end: Date): Date;
    isBetween(start: Date, end: Date): boolean;
    isOn(date: Date): boolean;
}