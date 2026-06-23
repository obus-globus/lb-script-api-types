import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface XMLXsiTypeConverter<T extends unknown> extends Object{
    convert(value: string): T;
}