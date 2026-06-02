import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class RealWebSocket$Close extends Object {
    constructor(code: number, reason: ByteString | null, cancelAfterCloseMillis: number)
    readonly cancelAfterCloseMillis: number;
    readonly code: number;
    readonly reason: ByteString | null;
}