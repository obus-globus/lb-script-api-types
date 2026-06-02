import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DateRule extends Object{
    firstAfter(arg0: Date): Date;
    firstBetween(arg0: Date, arg1: Date): Date;
    isBetween(arg0: Date, arg1: Date): boolean;
    isOn(arg0: Date): boolean;
}