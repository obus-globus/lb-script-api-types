import type { SslHandler } from '../../../../io/netty/handler/ssl/SslHandler.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SslHandler$AsyncTaskCompletionHandler extends Object implements Runnable {
    constructor(null_: SslHandler, arg1: boolean)
    // private didRun: boolean;
    // private inUnwrap: boolean;
    // private resumeLater: boolean;
    resumeLater(): boolean;
    run(): void;
}