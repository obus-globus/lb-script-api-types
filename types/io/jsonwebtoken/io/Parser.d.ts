import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export interface Parser<T extends Object | number | string | boolean> extends Object{
    parse(arg0: InputStream): T;
    parse(arg0: Reader): T;
    parse(arg0: CharSequence): T;
    parse(arg0: CharSequence, arg1: number, arg2: number): T;
}