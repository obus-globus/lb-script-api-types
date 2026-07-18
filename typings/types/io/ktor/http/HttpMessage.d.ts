import type { Headers } from '../../../io/ktor/http/Headers.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HttpMessage extends Object{
    readonly headers: Headers;
}