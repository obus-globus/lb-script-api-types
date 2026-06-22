import type { JsonEncoding } from '../../../../../../com/azure/json/implementation/jackson/core/JsonEncoding.d.ts'
import type { JsonGenerator } from '../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator.d.ts'
import type { JsonGenerator$Feature } from '../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator$Feature.d.ts'
import type { JsonParser } from '../../../../../../com/azure/json/implementation/jackson/core/JsonParser.d.ts'
import type { JsonParser$Feature } from '../../../../../../com/azure/json/implementation/jackson/core/JsonParser$Feature.d.ts'
import type { Version } from '../../../../../../com/azure/json/implementation/jackson/core/Version.d.ts'
import type { Versioned } from '../../../../../../com/azure/json/implementation/jackson/core/Versioned.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TokenStreamFactory extends Object implements Versioned, Serializable {
    constructor()
    _optimizedStreamFromURL(arg0: URL): InputStream;
    canHandleBinaryNatively(): boolean;
    createGenerator(arg0: OutputStream): JsonGenerator;
    createGenerator(arg0: OutputStream, arg1: JsonEncoding): JsonGenerator;
    createGenerator(arg0: Writer): JsonGenerator;
    createParser(arg0: File): JsonParser;
    createParser(arg0: InputStream): JsonParser;
    createParser(arg0: Reader): JsonParser;
    createParser(arg0: URL): JsonParser;
    createParser(arg0: number[]): JsonParser;
    createParser(arg0: number[], arg1: number, arg2: number): JsonParser;
    createParser(arg0: string): JsonParser;
    getFormatName(): string;
    isEnabled(arg0: JsonGenerator$Feature): boolean;
    isEnabled(arg0: JsonParser$Feature): boolean;
    version(): Version;
}