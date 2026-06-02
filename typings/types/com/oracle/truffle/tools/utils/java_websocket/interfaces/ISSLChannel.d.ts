import type { SSLEngine } from '../../../../../../../javax/net/ssl/SSLEngine.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ISSLChannel extends Object{
    getSSLEngine(): SSLEngine;
}