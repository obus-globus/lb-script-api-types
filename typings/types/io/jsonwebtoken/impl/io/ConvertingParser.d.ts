import type { AbstractParser } from '../../../../io/jsonwebtoken/impl/io/AbstractParser.d.ts'
import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConvertingParser<T extends Object | number | string | boolean> extends AbstractParser<T> {
    constructor(arg0: Function<Reader, { [key: string]: Object | null }>, arg1: Converter<T, Object>)
    // private converter: Converter<T, Object>;
    // private deserializer: Function<Reader, { [key: string]: Object | null }>;
    parse(arg0: Reader): T;
}