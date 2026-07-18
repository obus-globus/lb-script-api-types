import type { HeadersBuilder } from '../../../io/ktor/http/HeadersBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HttpMessageBuilder extends Object{
    readonly headers: HeadersBuilder;
}