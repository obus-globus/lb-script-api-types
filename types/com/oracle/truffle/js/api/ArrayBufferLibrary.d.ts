import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayBufferLibrary extends Library {
    static getFactory(): LibraryFactory<ArrayBufferLibrary>;
    static getUncached(): ArrayBufferLibrary;
    constructor()
    getByteLength(arrayBuffer: Object): number;
    getContents(arrayBuffer: Object): ByteBuffer;
    isArrayBuffer(object: Object): boolean;
}