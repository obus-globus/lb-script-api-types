import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface CommandLine$ITypeConverter<K extends unknown> extends Object{
    convert(value: string): K;
}