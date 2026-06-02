import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface XMLXsiTypeConverter<T extends Object | number | string | boolean> extends Object{
    convert(value: string): T;
}