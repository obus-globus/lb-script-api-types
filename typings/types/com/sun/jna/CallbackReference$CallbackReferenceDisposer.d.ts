import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CallbackReference$CallbackReferenceDisposer extends Object implements Runnable {
    constructor(arg0: Pointer)
    // private cbstruct: Pointer;
    run(): void;
}