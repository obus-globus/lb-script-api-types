import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Mac } from '../../../../../javax/crypto/Mac.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HmacAlgorithms } from '../../../../../org/apache/commons/codec/digest/HmacAlgorithms.d.ts'
export class HmacUtils extends Object {
    static getHmacMd5(paramarg0: number[]): Mac;
    static getHmacSha1(paramarg0: number[]): Mac;
    static getHmacSha256(paramarg0: number[]): Mac;
    static getHmacSha384(paramarg0: number[]): Mac;
    static getHmacSha512(paramarg0: number[]): Mac;
    static getInitializedMac(paramarg0: string, paramarg1: number[]): Mac;
    static getInitializedMac(paramarg0: HmacAlgorithms, paramarg1: number[]): Mac;
    static hmacMd5(paramarg0: number[], paramarg1: number[]): number[];
    static hmacMd5(paramarg0: number[], paramarg1: InputStream): number[];
    static hmacMd5(paramarg0: string, paramarg1: string): number[];
    static hmacMd5Hex(paramarg0: number[], paramarg1: number[]): string;
    static hmacMd5Hex(paramarg0: number[], paramarg1: InputStream): string;
    static hmacMd5Hex(paramarg0: string, paramarg1: string): string;
    static hmacSha1(paramarg0: number[], paramarg1: number[]): number[];
    static hmacSha1(paramarg0: number[], paramarg1: InputStream): number[];
    static hmacSha1(paramarg0: string, paramarg1: string): number[];
    static hmacSha1Hex(paramarg0: number[], paramarg1: number[]): string;
    static hmacSha1Hex(paramarg0: number[], paramarg1: InputStream): string;
    static hmacSha1Hex(paramarg0: string, paramarg1: string): string;
    static hmacSha256(paramarg0: number[], paramarg1: number[]): number[];
    static hmacSha256(paramarg0: number[], paramarg1: InputStream): number[];
    static hmacSha256(paramarg0: string, paramarg1: string): number[];
    static hmacSha256Hex(paramarg0: number[], paramarg1: number[]): string;
    static hmacSha256Hex(paramarg0: number[], paramarg1: InputStream): string;
    static hmacSha256Hex(paramarg0: string, paramarg1: string): string;
    static hmacSha384(paramarg0: number[], paramarg1: number[]): number[];
    static hmacSha384(paramarg0: number[], paramarg1: InputStream): number[];
    static hmacSha384(paramarg0: string, paramarg1: string): number[];
    static hmacSha384Hex(paramarg0: number[], paramarg1: number[]): string;
    static hmacSha384Hex(paramarg0: number[], paramarg1: InputStream): string;
    static hmacSha384Hex(paramarg0: string, paramarg1: string): string;
    static hmacSha512(paramarg0: number[], paramarg1: number[]): number[];
    static hmacSha512(paramarg0: number[], paramarg1: InputStream): number[];
    static hmacSha512(paramarg0: string, paramarg1: string): number[];
    static hmacSha512Hex(paramarg0: number[], paramarg1: number[]): string;
    static hmacSha512Hex(paramarg0: number[], paramarg1: InputStream): string;
    static hmacSha512Hex(paramarg0: string, paramarg1: string): string;
    static isAvailable(paramarg0: string): boolean;
    static isAvailable(paramarg0: HmacAlgorithms): boolean;
    static updateHmac(paramarg0: Mac, paramarg1: number[]): Mac;
    static updateHmac(paramarg0: Mac, paramarg1: InputStream): Mac;
    static updateHmac(paramarg0: Mac, paramarg1: string): Mac;
    constructor()
    private constructor(arg0: Mac)
    constructor(arg0: string, arg1: number[])
    constructor(arg0: string, arg1: string)
    constructor(arg0: HmacAlgorithms, arg1: number[])
    constructor(arg0: HmacAlgorithms, arg1: string)
    // private mac: Mac;
    hmac(arg0: File): number[];
    hmac(arg0: InputStream): number[];
    hmac(arg0: ByteBuffer): number[];
    hmac(arg0: Path[]): number[];
    hmac(arg0: number[]): number[];
    hmac(arg0: string): number[];
    hmacHex(arg0: File): string;
    hmacHex(arg0: InputStream): string;
    hmacHex(arg0: ByteBuffer): string;
    hmacHex(arg0: Path[]): string;
    hmacHex(arg0: number[]): string;
    hmacHex(arg0: string): string;
}