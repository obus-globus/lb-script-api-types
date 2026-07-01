import type { CompressionAlgorithm } from '../../../io/jsonwebtoken/io/CompressionAlgorithm.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class Payload extends Object {
    constructor(arg0: { [key: string]: any })
    constructor(arg0: InputStream, arg1: string)
    constructor(arg0: number[], arg1: string)
    constructor(arg0: CharSequence, arg1: string)
    readonly bytes: number[];
    // private claims: { [key: string]: any };
    readonly claimsExpected: boolean;
    // private contentType: string;
    // private inputStream: InputStream;
    // private inputStreamEmpty: boolean;
    // private string: CharSequence;
    readonly zip: CompressionAlgorithm;
    compress(arg0: OutputStream): OutputStream;
    decompress(arg0: CompressionAlgorithm): Payload;
    getBytes(): number[];
    getContentType(): string;
    getRequiredClaims(): { [key: string]: any };
    isClaims(): boolean;
    isCompressed(): boolean;
    isConsumable(): boolean;
    isEmpty(): boolean;
    isString(): boolean;
    setClaimsExpected(arg0: boolean): void;
    setZip(arg0: CompressionAlgorithm): void;
    toInputStream(): InputStream;
}