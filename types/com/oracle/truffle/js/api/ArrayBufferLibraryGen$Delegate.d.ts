import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { ArrayBufferLibrary } from '../../../../../com/oracle/truffle/js/api/ArrayBufferLibrary.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayBufferLibraryGen$Delegate extends ArrayBufferLibrary {
    static getFactory(): LibraryFactory<ArrayBufferLibrary>;
    static getUncached(): ArrayBufferLibrary;
    constructor(delegateLibrary: ArrayBufferLibrary)
    // private delegateLibrary: ArrayBufferLibrary;
    accepts(receiver_: Object): boolean;
    getByteLength(receiver_: Object): number;
    getContents(receiver_: Object): ByteBuffer;
    isAdoptable(): boolean;
    isArrayBuffer(receiver_: Object): boolean;
}