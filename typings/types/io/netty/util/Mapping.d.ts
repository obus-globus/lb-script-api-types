import type { Object } from '../../../java/lang/Object.d.ts'
export interface Mapping<IN extends Object | number | string | boolean, OUT extends Object | number | string | boolean> extends Object{
    map(arg0: IN): OUT;
}