import type { MigrationMapFileReader$1 } from '../../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { BufferedReader } from '../../../../../../../../java/io/BufferedReader.d.ts'
import type { Reader } from '../../../../../../../../java/io/Reader.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
export class MigrationMapFileReader$CustomBufferedReader extends BufferedReader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    private constructor(arg0: Reader)
    constructor(arg0: Reader, arg1: MigrationMapFileReader$1)
    close(): void;
    forceClose(): void;
}