import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UNISTD extends Object {
    static _SC_IOV_MAX: number;
    static _SC_OPEN_MAX: number;
    static _SC_PAGE_SIZE: number;
    static close(paramarg0: IntBuffer, paramarg1: number): number;
    static getpid(): number;
    static getppid(): number;
    static gettid(): number;
    static nclose(paramarg0: number, paramarg1: number): number;
    static nread(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nsysconf(paramarg0: number, paramarg1: number): number;
    static read(paramarg0: IntBuffer, paramarg1: number, paramarg2: ByteBuffer): number;
    static sysconf(paramarg0: IntBuffer, paramarg1: number): number;
    constructor()
}