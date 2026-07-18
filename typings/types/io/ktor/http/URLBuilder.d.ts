import type { Parameters } from '../../../io/ktor/http/Parameters.d.ts'
import type { ParametersBuilder } from '../../../io/ktor/http/ParametersBuilder.d.ts'
import type { URLBuilder$Companion } from '../../../io/ktor/http/URLBuilder$Companion.d.ts'
import type { URLProtocol } from '../../../io/ktor/http/URLProtocol.d.ts'
import type { Url } from '../../../io/ktor/http/Url.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class URLBuilder extends Object {
    static Companion: URLBuilder$Companion;
    constructor(protocol: URLProtocol | null, host: string, port: number, user: string | null, password: string | null, pathSegments: string[], parameters: Parameters, fragment: string, trailingQuery: boolean)
    encodedFragment: string;
    encodedParameters: ParametersBuilder;
    encodedPassword: string | null;
    encodedPathSegments: string[];
    encodedUser: string | null;
    fragment: string;
    host: string;
    readonly parameters: ParametersBuilder;
    password: string | null;
    pathSegments: string[];
    port: number;
    protocol: URLProtocol;
    protocolOrNull: URLProtocol | null;
    trailingQuery: boolean;
    user: string | null;
    // private applyOrigin(): void;
    build(): Url;
    buildString(): string;
    toString(): string;
}