import type { URLProtocol$Companion } from '../../../io/ktor/http/URLProtocol$Companion.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class URLProtocol extends Object implements Serializable {
    static Companion: URLProtocol$Companion;
    constructor(name: string, defaultPort: number)
    readonly defaultPort: number;
    readonly name: string;
    component1(): string;
    component2(): number;
    copy(name: string, defaultPort: number): URLProtocol;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}