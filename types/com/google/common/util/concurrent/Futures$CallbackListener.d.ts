import type { FutureCallback } from '../../../../../com/google/common/util/concurrent/FutureCallback.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Futures$CallbackListener<V extends Object | number | string | boolean> extends Object implements Runnable {
    constructor(future: Future<V>, callback: FutureCallback<V>)
    // private callback: FutureCallback<V>;
    // private future: Future<V>;
    run(): void;
    toString(): string;
}