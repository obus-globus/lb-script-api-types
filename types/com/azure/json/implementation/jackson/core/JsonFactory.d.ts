import type { JsonEncoding } from '../../../../../../com/azure/json/implementation/jackson/core/JsonEncoding.d.ts'
import type { JsonFactory$Feature } from '../../../../../../com/azure/json/implementation/jackson/core/JsonFactory$Feature.d.ts'
import type { JsonFactoryBuilder } from '../../../../../../com/azure/json/implementation/jackson/core/JsonFactoryBuilder.d.ts'
import type { JsonGenerator } from '../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator.d.ts'
import type { JsonGenerator$Feature } from '../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator$Feature.d.ts'
import type { JsonParser } from '../../../../../../com/azure/json/implementation/jackson/core/JsonParser.d.ts'
import type { JsonParser$Feature } from '../../../../../../com/azure/json/implementation/jackson/core/JsonParser$Feature.d.ts'
import type { ObjectCodec } from '../../../../../../com/azure/json/implementation/jackson/core/ObjectCodec.d.ts'
import type { SerializableString } from '../../../../../../com/azure/json/implementation/jackson/core/SerializableString.d.ts'
import type { StreamReadFeature } from '../../../../../../com/azure/json/implementation/jackson/core/StreamReadFeature.d.ts'
import type { StreamWriteFeature } from '../../../../../../com/azure/json/implementation/jackson/core/StreamWriteFeature.d.ts'
import type { TSFBuilder } from '../../../../../../com/azure/json/implementation/jackson/core/TSFBuilder.d.ts'
import type { TokenStreamFactory } from '../../../../../../com/azure/json/implementation/jackson/core/TokenStreamFactory.d.ts'
import type { Version } from '../../../../../../com/azure/json/implementation/jackson/core/Version.d.ts'
import type { Versioned } from '../../../../../../com/azure/json/implementation/jackson/core/Versioned.d.ts'
import type { CharacterEscapes } from '../../../../../../com/azure/json/implementation/jackson/core/io/CharacterEscapes.d.ts'
import type { ContentReference } from '../../../../../../com/azure/json/implementation/jackson/core/io/ContentReference.d.ts'
import type { IOContext } from '../../../../../../com/azure/json/implementation/jackson/core/io/IOContext.d.ts'
import type { InputDecorator } from '../../../../../../com/azure/json/implementation/jackson/core/io/InputDecorator.d.ts'
import type { OutputDecorator } from '../../../../../../com/azure/json/implementation/jackson/core/io/OutputDecorator.d.ts'
import type { ByteQuadsCanonicalizer } from '../../../../../../com/azure/json/implementation/jackson/core/sym/ByteQuadsCanonicalizer.d.ts'
import type { CharsToNameCanonicalizer } from '../../../../../../com/azure/json/implementation/jackson/core/sym/CharsToNameCanonicalizer.d.ts'
import type { BufferRecycler } from '../../../../../../com/azure/json/implementation/jackson/core/util/BufferRecycler.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JsonFactory extends TokenStreamFactory implements Versioned, Serializable {
    static DEFAULT_QUOTE_CHAR: string;
    static DEFAULT_ROOT_VALUE_SEPARATOR: SerializableString;
    static FORMAT_NAME_JSON: string;
    static builder(): TSFBuilder<Object, Object>;
    constructor()
    constructor(arg0: JsonFactory, arg1: ObjectCodec)
    constructor(arg0: JsonFactoryBuilder)
    constructor(arg0: ObjectCodec)
    constructor(arg0: TSFBuilder<Object, Object>, arg1: boolean)
    // private _byteSymbolCanonicalizer: ByteQuadsCanonicalizer;
    // private _characterEscapes: CharacterEscapes;
    // private _factoryFeatures: number;
    // private _generatorFeatures: number;
    // private _inputDecorator: InputDecorator;
    // private _maximumNonEscapedChar: number;
    // private _objectCodec: ObjectCodec;
    // private _outputDecorator: OutputDecorator;
    // private _parserFeatures: number;
    // private _quoteChar: string;
    // private _rootCharSymbols: CharsToNameCanonicalizer;
    // private _rootValueSeparator: SerializableString;
    _checkInvalidCopy(arg0: Class<Object>): void;
    _createContentReference(arg0: Object): ContentReference;
    _createContentReference(arg0: Object, arg1: number, arg2: number): ContentReference;
    _createContext(arg0: ContentReference, arg1: boolean): IOContext;
    _createContext(arg0: Object, arg1: boolean): IOContext;
    _createGenerator(arg0: Writer, arg1: IOContext): JsonGenerator;
    _createParser(arg0: InputStream, arg1: IOContext): JsonParser;
    _createParser(arg0: Reader, arg1: IOContext): JsonParser;
    _createParser(arg0: number[], arg1: number, arg2: number, arg3: IOContext): JsonParser;
    _createParser(arg0: string[], arg1: number, arg2: number, arg3: IOContext, arg4: boolean): JsonParser;
    _createUTF8Generator(arg0: OutputStream, arg1: IOContext): JsonGenerator;
    _createWriter(arg0: OutputStream, arg1: JsonEncoding, arg2: IOContext): Writer;
    _decorate(arg0: InputStream, arg1: IOContext): InputStream;
    _decorate(arg0: OutputStream, arg1: IOContext): OutputStream;
    _decorate(arg0: Reader, arg1: IOContext): Reader;
    _decorate(arg0: Writer, arg1: IOContext): Writer;
    _getBufferRecycler(): BufferRecycler;
    canHandleBinaryNatively(): boolean;
    canUseCharArrays(): boolean;
    configure(arg0: JsonFactory$Feature, arg1: boolean): JsonFactory;
    configure(arg0: JsonGenerator$Feature, arg1: boolean): JsonFactory;
    configure(arg0: JsonParser$Feature, arg1: boolean): JsonFactory;
    copy(): JsonFactory;
    createGenerator(arg0: OutputStream): JsonGenerator;
    createGenerator(arg0: OutputStream, arg1: JsonEncoding): JsonGenerator;
    createGenerator(arg0: Writer): JsonGenerator;
    createJsonGenerator(arg0: OutputStream): JsonGenerator;
    createJsonGenerator(arg0: OutputStream, arg1: JsonEncoding): JsonGenerator;
    createJsonGenerator(arg0: Writer): JsonGenerator;
    createJsonParser(arg0: File): JsonParser;
    createJsonParser(arg0: InputStream): JsonParser;
    createJsonParser(arg0: Reader): JsonParser;
    createJsonParser(arg0: URL): JsonParser;
    createJsonParser(arg0: number[]): JsonParser;
    createJsonParser(arg0: number[], arg1: number, arg2: number): JsonParser;
    createJsonParser(arg0: string): JsonParser;
    createParser(arg0: File): JsonParser;
    createParser(arg0: InputStream): JsonParser;
    createParser(arg0: Reader): JsonParser;
    createParser(arg0: URL): JsonParser;
    createParser(arg0: number[]): JsonParser;
    createParser(arg0: number[], arg1: number, arg2: number): JsonParser;
    createParser(arg0: string): JsonParser;
    disable(arg0: JsonFactory$Feature): JsonFactory;
    disable(arg0: JsonGenerator$Feature): JsonFactory;
    disable(arg0: JsonParser$Feature): JsonFactory;
    enable(arg0: JsonFactory$Feature): JsonFactory;
    enable(arg0: JsonGenerator$Feature): JsonFactory;
    enable(arg0: JsonParser$Feature): JsonFactory;
    getCodec(): ObjectCodec;
    getFormatName(): string;
    isEnabled(arg0: JsonFactory$Feature): boolean;
    isEnabled(arg0: JsonGenerator$Feature): boolean;
    isEnabled(arg0: JsonParser$Feature): boolean;
    isEnabled(arg0: StreamReadFeature): boolean;
    isEnabled(arg0: StreamWriteFeature): boolean;
    readResolve(): Object;
    setCodec(arg0: ObjectCodec): JsonFactory;
    setInputDecorator(arg0: InputDecorator): JsonFactory;
    setOutputDecorator(arg0: OutputDecorator): JsonFactory;
    version(): Version;
}