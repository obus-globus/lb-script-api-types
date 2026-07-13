import type { Object } from '../java/lang/Object.d.ts'
export interface Converter<F extends unknown, T extends unknown> extends Object{
    convert(arg0: F): T;
}