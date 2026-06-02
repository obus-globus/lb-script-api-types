import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { ProxyReader } from '../../../../../org/apache/commons/io/input/ProxyReader.d.ts'
export class CloseShieldReader extends ProxyReader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    static wrap(paramarg0: Reader): CloseShieldReader;
    constructor(arg0: Reader)
    close(): void;
}