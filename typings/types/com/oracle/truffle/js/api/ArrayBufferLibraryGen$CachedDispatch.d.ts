import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { ArrayBufferLibrary } from '../../../../../com/oracle/truffle/js/api/ArrayBufferLibrary.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayBufferLibraryGen$CachedDispatch extends ArrayBufferLibrary {
    static getFactory(): LibraryFactory<ArrayBufferLibrary>;
    static getUncached(): ArrayBufferLibrary;
    constructor(library: ArrayBufferLibrary, next: ArrayBufferLibraryGen$CachedDispatch)
    // private library: ArrayBufferLibrary;
    // private next: ArrayBufferLibraryGen$CachedDispatch;
    accepts(receiver_: Object): boolean;
    getByteLength(receiver_: Object): number;
    getContents(receiver_: Object): ByteBuffer;
    getLimit(): number;
    isArrayBuffer(receiver_: Object): boolean;
    // private specialize(receiver_: Object): void;
}