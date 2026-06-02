import type { JsonEncoding } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonEncoding.d.ts'
import type { JsonParser } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonParser.d.ts'
import type { ObjectCodec } from '../../../../../../../com/azure/json/implementation/jackson/core/ObjectCodec.d.ts'
import type { IOContext } from '../../../../../../../com/azure/json/implementation/jackson/core/io/IOContext.d.ts'
import type { ByteQuadsCanonicalizer } from '../../../../../../../com/azure/json/implementation/jackson/core/sym/ByteQuadsCanonicalizer.d.ts'
import type { CharsToNameCanonicalizer } from '../../../../../../../com/azure/json/implementation/jackson/core/sym/CharsToNameCanonicalizer.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ByteSourceJsonBootstrapper extends Object {
    constructor(arg0: IOContext, arg1: InputStream)
    constructor(arg0: IOContext, arg1: number[], arg2: number, arg3: number)
    // private _bigEndian: boolean;
    // private _bufferRecyclable: boolean;
    // private _bytesPerChar: number;
    // private _context: IOContext;
    // private _in: InputStream;
    // private _inputBuffer: number[];
    // private _inputEnd: number;
    // private _inputPtr: number;
    // private checkUTF16(arg0: number): boolean;
    // private checkUTF32(arg0: number): boolean;
    constructParser(arg0: number, arg1: ObjectCodec, arg2: ByteQuadsCanonicalizer, arg3: CharsToNameCanonicalizer, arg4: number): JsonParser;
    constructReader(): Reader;
    detectEncoding(): JsonEncoding;
    // private ensureLoaded(arg0: number): boolean;
    // private handleBOM(arg0: number): boolean;
    // private reportWeirdUCS4(arg0: string): void;
}