import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ZipLong } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipLong.d.ts'
export abstract class ZipUtil extends Object {
    static adjustToLong(paramarg0: number): number;
    static dosToJavaTime(paramarg0: number): number;
    static fromDosTime(paramarg0: ZipLong): Date;
    static isDosTime(paramarg0: number): boolean;
    static reverse(paramarg0: number[]): number[];
    static signedByteToUnsignedInt(paramarg0: number): number;
    static toDosTime(paramarg0: number): number[];
    static toDosTime(paramarg0: Date): ZipLong;
    static toDosTime(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static unsignedIntToSignedByte(paramarg0: number): number;
    constructor()
}