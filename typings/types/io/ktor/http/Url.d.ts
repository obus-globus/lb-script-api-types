import type { Parameters } from '../../../io/ktor/http/Parameters.d.ts'
import type { URLProtocol } from '../../../io/ktor/http/URLProtocol.d.ts'
import type { Url$Companion } from '../../../io/ktor/http/Url$Companion.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Url extends Object implements Serializable {
    static Companion: Url$Companion;
    constructor(protocol: URLProtocol | null, host: string, specifiedPort: number, pathSegments: string[], parameters: Parameters, fragment: string, user: string | null, password: string | null, trailingQuery: boolean, urlString: string)
    readonly encodedFragment: string;
    readonly encodedPassword: string | null;
    readonly encodedPath: string;
    readonly encodedPathAndQuery: string;
    readonly encodedQuery: string;
    readonly encodedUser: string | null;
    readonly fragment: string;
    readonly host: string;
    readonly parameters: Parameters;
    readonly password: string | null;
    readonly pathSegments: string[];
    readonly port: number;
    readonly protocol: URLProtocol;
    readonly protocolOrNull: URLProtocol | null;
    readonly rawSegments: string[];
    readonly segments: string[];
    readonly specifiedPort: number;
    readonly trailingQuery: boolean;
    // private urlString: string;
    readonly user: string | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    // private writeReplace(): Object;
}