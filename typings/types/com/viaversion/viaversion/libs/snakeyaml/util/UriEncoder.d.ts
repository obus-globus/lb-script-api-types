import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class UriEncoder extends Object {
    static decode(paramarg0: string): string;
    static decode(paramarg0: ByteBuffer): string;
    static encode(paramarg0: string): string;
    constructor()
}