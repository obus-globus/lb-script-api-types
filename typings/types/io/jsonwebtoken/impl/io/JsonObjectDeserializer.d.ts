import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Deserializer } from '../../../../io/jsonwebtoken/io/Deserializer.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class JsonObjectDeserializer extends Object implements Function<Reader, { [key: string]: Object | null }> {
    constructor(arg0: Deserializer<Object>, arg1: string)
    // private deserializer: Deserializer<Object>;
    // private name: string;
    apply(arg0: Reader): { [key: string]: Object | null };
    malformed(arg0: Throwable): RuntimeException;
}