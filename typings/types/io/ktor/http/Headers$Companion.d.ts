import type { Headers } from '../../../io/ktor/http/Headers.d.ts'
import type { HeadersBuilder } from '../../../io/ktor/http/HeadersBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Headers$Companion extends Object {
    // private Empty: Headers;
    /*not mapped: */ getEmpty(): Headers;
    build(builder: (param0: HeadersBuilder) => void): Headers;
}