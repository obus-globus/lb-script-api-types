import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostAndPort extends Object {
    static parseFrom(paramarg0: URI): HostAndPort;
    constructor(arg0: string, arg1: number)
    readonly hostname: string;
    readonly port: number;
    equals(arg0: Object | null): boolean;
    getHostname(): string;
    getPort(): number;
    hashCode(): number;
    toString(): string;
    toURI(arg0: string): URI;
    toURI(arg0: string, arg1: URI): URI;
    toURI(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): URI;
}