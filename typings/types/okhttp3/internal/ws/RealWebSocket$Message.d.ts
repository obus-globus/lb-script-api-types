import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class RealWebSocket$Message extends Object {
    constructor(formatOpcode: number, data: ByteString)
    readonly data: ByteString;
    readonly formatOpcode: number;
}