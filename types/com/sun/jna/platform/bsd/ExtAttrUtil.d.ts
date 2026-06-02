import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtAttrUtil extends Object {
    static delete(paramarg0: string, paramarg1: string): void;
    static get(paramarg0: string, paramarg1: string): ByteBuffer;
    static list(paramarg0: string): string[];
    static set(paramarg0: string, paramarg1: string, paramarg2: ByteBuffer): void;
    constructor()
}