import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostAndPort extends Object implements Serializable {
    static fromHost(paramhost: string): HostAndPort;
    static fromParts(paramhost: string, paramport: number): HostAndPort;
    static fromString(paramhostPortString: string): HostAndPort;
    private constructor(host: string, port: number, hasBracketlessColons: boolean)
    // private hasBracketlessColons: boolean;
    readonly host: string;
    readonly port: number;
    equals(other: Object | null): boolean;
    getHost(): string;
    getPort(): number;
    getPortOrDefault(defaultPort: number): number;
    hasPort(): boolean;
    hashCode(): number;
    requireBracketsForIPv6(): HostAndPort;
    toString(): string;
    withDefaultPort(defaultPort: number): HostAndPort;
}