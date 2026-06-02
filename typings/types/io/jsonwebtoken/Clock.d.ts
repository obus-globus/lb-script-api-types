import type { Date } from '../../java/util/Date.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Clock extends Object{
    now(): Date;
}