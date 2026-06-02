import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface OpenSslAsyncPrivateKeyMethod extends Object{
    decrypt(arg0: SSLEngine, arg1: number[]): Future<number[]>;
    sign(arg0: SSLEngine, arg1: number, arg2: number[]): Future<number[]>;
}