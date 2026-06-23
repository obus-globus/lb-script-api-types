import type { AbstractParser } from '../../../../io/jsonwebtoken/impl/io/AbstractParser.d.ts'
import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class ConvertingParser<T extends unknown> extends AbstractParser<T> {
    constructor(arg0: Function<Reader, { [key: string]: Object | null }>, arg1: Converter<T, Object>)
    // private converter: Converter<T, Object>;
    // private deserializer: Function<Reader, { [key: string]: Object | null }>;
    parse(arg0: InputStream): T;
    parse(arg0: Reader): T;
    parse(arg0: CharSequence): T;
    parse(arg0: CharSequence, arg1: number, arg2: number): T;
}