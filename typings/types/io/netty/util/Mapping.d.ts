import type { Object } from '../../../java/lang/Object.d.ts'
export interface Mapping<IN extends unknown, OUT extends unknown> extends Object{
    map(arg0: IN): OUT;
}