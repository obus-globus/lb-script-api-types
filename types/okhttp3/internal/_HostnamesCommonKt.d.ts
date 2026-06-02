import type { Object } from '../../java/lang/Object.d.ts'
export class _HostnamesCommonKt extends Object {
    static canParseAsIpAddress(paramarg0: string): boolean;
    static canonicalizeInetAddress(paramarg0: number[]): number[];
    static containsInvalidHostnameAsciiCodes(paramarg0: string): boolean;
    static containsInvalidLabelLengths(paramarg0: string): boolean;
    static decodeIpv4Suffix(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number): boolean;
    static decodeIpv6(paramarg0: string, paramarg1: number, paramarg2: number): number[];
    static idnToAscii(paramarg0: string): string;
    static inet4AddressToAscii(paramarg0: number[]): string;
    static inet6AddressToAscii(paramarg0: number[]): string;
    static toCanonicalHost(paramarg0: string): string;
}