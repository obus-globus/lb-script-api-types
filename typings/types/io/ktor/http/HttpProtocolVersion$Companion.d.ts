import type { HttpProtocolVersion } from '../../../io/ktor/http/HttpProtocolVersion.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class HttpProtocolVersion$Companion extends Object {
    readonly HTTP_1_0: HttpProtocolVersion;
    readonly HTTP_1_1: HttpProtocolVersion;
    readonly HTTP_2_0: HttpProtocolVersion;
    readonly HTTP_3_0: HttpProtocolVersion;
    readonly QUIC: HttpProtocolVersion;
    readonly SPDY_3: HttpProtocolVersion;
    fromValue(name: string, major: number, minor: number): HttpProtocolVersion;
    parse(value: CharSequence): HttpProtocolVersion;
}