import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Socket extends Object {
    static SHUT_RD: number;
    static SHUT_RDWR: number;
    static SHUT_WR: number;
    static nsocket(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static socket(paramarg0: IntBuffer, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}