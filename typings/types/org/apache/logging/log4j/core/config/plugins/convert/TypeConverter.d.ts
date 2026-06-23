import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface TypeConverter<T extends unknown> extends Object{
    convert(s: string): T;
}