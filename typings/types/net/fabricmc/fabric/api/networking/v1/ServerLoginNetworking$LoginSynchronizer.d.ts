import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ServerLoginNetworking$LoginSynchronizer extends Object{
    waitFor(arg0: Future<Object>): void;
}