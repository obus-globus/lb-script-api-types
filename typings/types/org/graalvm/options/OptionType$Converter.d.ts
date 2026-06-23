import type { Object } from '../../../java/lang/Object.d.ts'
export interface OptionType$Converter<T extends unknown> extends Object{
    convert(previousValue: T, key: string, value: string): T;
}