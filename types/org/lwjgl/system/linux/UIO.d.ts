import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IOVec } from '../../../../org/lwjgl/system/linux/IOVec.d.ts'
export class UIO extends Object {
    static RWF_APPEND: number;
    static RWF_DSYNC: number;
    static RWF_HIPRI: number;
    static RWF_NOWAIT: number;
    static RWF_SYNC: number;
    static UIO_FASTIOV: number;
    static UIO_MAXIOV: number;
    static npreadv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nprocess_vm_readv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    static nprocess_vm_writev(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    static npwritev(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nreadv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nwritev(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static preadv(paramarg0: IntBuffer, paramarg1: number, paramarg2: IOVec, paramarg3: number, paramarg4: number): number;
    static process_vm_readv(paramarg0: IntBuffer, paramarg1: number, paramarg2: IOVec, paramarg3: number, paramarg4: IOVec, paramarg5: number, paramarg6: number): number;
    static process_vm_writev(paramarg0: IntBuffer, paramarg1: number, paramarg2: IOVec, paramarg3: number, paramarg4: IOVec, paramarg5: number, paramarg6: number): number;
    static pwritev(paramarg0: IntBuffer, paramarg1: number, paramarg2: IOVec, paramarg3: number, paramarg4: number): number;
    static readv(paramarg0: IntBuffer, paramarg1: number, paramarg2: IOVec, paramarg3: number): number;
    static writev(paramarg0: IntBuffer, paramarg1: number, paramarg2: IOVec, paramarg3: number): number;
    constructor()
}