import type { JsonEncoding } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonEncoding.d.ts'
import type { ContentReference } from '../../../../../../../com/azure/json/implementation/jackson/core/io/ContentReference.d.ts'
import type { BufferRecycler } from '../../../../../../../com/azure/json/implementation/jackson/core/util/BufferRecycler.d.ts'
import type { TextBuffer } from '../../../../../../../com/azure/json/implementation/jackson/core/util/TextBuffer.d.ts'
import type { IllegalArgumentException } from '../../../../../../../java/lang/IllegalArgumentException.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class IOContext extends Object {
    constructor(arg0: BufferRecycler, arg1: ContentReference, arg2: boolean)
    constructor(arg0: BufferRecycler, arg1: Object, arg2: boolean)
    // private _base64Buffer: number[];
    // private _bufferRecycler: BufferRecycler;
    // private _concatCBuffer: string[];
    // private _contentReference: ContentReference;
    // private _encoding: JsonEncoding;
    // private _managedResource: boolean;
    // private _nameCopyBuffer: string[];
    // private _readIOBuffer: number[];
    // private _sourceRef: Object;
    // private _tokenCBuffer: string[];
    // private _writeEncodingBuffer: number[];
    _verifyAlloc(arg0: Object): void;
    _verifyRelease(arg0: number[], arg1: number[]): void;
    _verifyRelease(arg0: string[], arg1: string[]): void;
    allocBase64Buffer(): number[];
    allocConcatBuffer(): string[];
    allocNameCopyBuffer(arg0: number): string[];
    allocReadIOBuffer(): number[];
    allocTokenBuffer(): string[];
    allocTokenBuffer(arg0: number): string[];
    allocWriteEncodingBuffer(): number[];
    constructTextBuffer(): TextBuffer;
    contentReference(): ContentReference;
    getEncoding(): JsonEncoding;
    getSourceReference(): Object;
    isResourceManaged(): boolean;
    releaseBase64Buffer(arg0: number[]): void;
    releaseConcatBuffer(arg0: string[]): void;
    releaseNameCopyBuffer(arg0: string[]): void;
    releaseReadIOBuffer(arg0: number[]): void;
    releaseTokenBuffer(arg0: string[]): void;
    releaseWriteEncodingBuffer(arg0: number[]): void;
    setEncoding(arg0: JsonEncoding): void;
    // private wrongBuf(): IllegalArgumentException;
}