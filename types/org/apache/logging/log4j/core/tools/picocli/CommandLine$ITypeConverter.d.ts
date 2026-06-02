import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface CommandLine$ITypeConverter<K extends Object | number | string | boolean> extends Object{
    convert(value: string): K;
}