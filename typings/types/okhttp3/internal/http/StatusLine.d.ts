import type { Object } from '../../../java/lang/Object.d.ts'
import type { Protocol } from '../../../okhttp3/Protocol.d.ts'
import type { StatusLine$Companion } from '../../../okhttp3/internal/http/StatusLine$Companion.d.ts'
export class StatusLine extends Object {
    static Companion: StatusLine$Companion;
    constructor(protocol: Protocol, code: number, message: string)
    code: number;
    message: string;
    protocol: Protocol;
    toString(): string;
}