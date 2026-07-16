import type { Object } from '../../java/lang/Object.d.ts'
export class _HostnamesCommonKt extends Object {
    static canParseAsIpAddress(self: string): boolean;
    static canonicalizeInetAddress(address: number[]): number[];
    static containsInvalidHostnameAsciiCodes(self: string): boolean;
    static containsInvalidLabelLengths(self: string): boolean;
    static decodeIpv4Suffix(input: string, pos: number, limit: number, address: number[], addressOffset: number): boolean;
    static decodeIpv6(input: string, pos: number, limit: number): number[] | null;
    static idnToAscii(host: string): string | null;
    static inet4AddressToAscii(address: number[]): string;
    static inet6AddressToAscii(address: number[]): string;
    static toCanonicalHost(self: string): string | null;
}