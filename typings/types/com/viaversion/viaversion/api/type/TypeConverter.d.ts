import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TypeConverter<T extends unknown> extends Object{
    from(arg0: Object): T;
}