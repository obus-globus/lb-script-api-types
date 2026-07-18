import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { HeaderValueParam } from '../../../../io/ktor/http/HeaderValueParam.d.ts'
import type { HeaderValueEncoding } from '../../../../io/ktor/http/auth/HeaderValueEncoding.d.ts'
import type { HttpAuthHeader } from '../../../../io/ktor/http/auth/HttpAuthHeader.d.ts'
import type { HttpAuthHeader$Companion } from '../../../../io/ktor/http/auth/HttpAuthHeader$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpAuthHeader$Parameterized extends HttpAuthHeader {
    static Companion: HttpAuthHeader$Companion;
    constructor(authScheme: string, parameters: HeaderValueParam[], encoding: HeaderValueEncoding)
    constructor(authScheme: string, parameters: JavaMap<string, string>, encoding: HeaderValueEncoding)
    readonly encoding: HeaderValueEncoding;
    readonly parameters: HeaderValueParam[];
    equals(other: Object | null): boolean;
    hashCode(): number;
    parameter(name: string): string | null;
    render(): string;
    render(encoding: HeaderValueEncoding): string;
    withParameter(name: string, value: string): HttpAuthHeader$Parameterized;
    withReplacedParameter(name: string, value: string): HttpAuthHeader$Parameterized;
}