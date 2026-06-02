import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface OpenSslPrivateKeyMethod extends Object{
    decrypt(arg0: SSLEngine, arg1: number[]): number[];
    sign(arg0: SSLEngine, arg1: number, arg2: number[]): number[];
}