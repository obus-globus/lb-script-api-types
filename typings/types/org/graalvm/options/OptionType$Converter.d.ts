import type { Object } from '../../../java/lang/Object.d.ts'
export interface OptionType$Converter<T extends Object | number | string | boolean> extends Object{
    convert(previousValue: T, key: string, value: string): T;
}