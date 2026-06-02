import type { Object } from '../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class Punycode extends Object {
    static INSTANCE: Punycode;
    // private BASE: number;
    // private DAMP: number;
    // private INITIAL_BIAS: number;
    // private INITIAL_N: number;
    readonly PREFIX: ByteString;
    readonly PREFIX_STRING: string;
    // private SKEW: number;
    // private TMAX: number;
    // private TMIN: number;
    // private adapt(delta: number, numpoints: number, first: boolean): number;
    decode(string: string): string | null;
    // private decodeLabel(string: string, pos: number, limit: number, result: Buffer): boolean;
    encode(string: string): string | null;
    // private encodeLabel(string: string, pos: number, limit: number, result: Buffer): boolean;
}