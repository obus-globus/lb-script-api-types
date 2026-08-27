import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RetryTlsHandshakeKt extends Object {
    static attemptAnotherConnection(e: IOException): boolean;
    static attemptAnotherConnectionSpec(e: IOException): boolean;
}