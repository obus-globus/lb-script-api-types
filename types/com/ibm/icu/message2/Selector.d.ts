import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Selector extends Object{
    matches(arg0: Object, arg1: string[], arg2: { [key: string]: Object }): string[];
}