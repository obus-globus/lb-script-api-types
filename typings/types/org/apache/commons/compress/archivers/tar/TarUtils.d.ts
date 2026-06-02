import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TarArchiveStructSparse } from '../../../../../../org/apache/commons/compress/archivers/tar/TarArchiveStructSparse.d.ts'
import type { ZipEncoding } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEncoding.d.ts'
export class TarUtils extends Object {
    static computeCheckSum(paramarg0: number[]): number;
    static formatCheckSumOctalBytes(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static formatLongOctalBytes(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static formatLongOctalOrBinaryBytes(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static formatNameBytes(paramarg0: string, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static formatNameBytes(paramarg0: string, paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: ZipEncoding): number;
    static formatOctalBytes(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static formatUnsignedOctalString(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: number): void;
    static parseBoolean(paramarg0: number[], paramarg1: number): boolean;
    static parseName(paramarg0: number[], paramarg1: number, paramarg2: number): string;
    static parseName(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: ZipEncoding): string;
    static parseOctal(paramarg0: number[], paramarg1: number, paramarg2: number): number;
    static parseOctalOrBinary(paramarg0: number[], paramarg1: number, paramarg2: number): number;
    static parseSparse(paramarg0: number[], paramarg1: number): TarArchiveStructSparse;
    static verifyCheckSum(paramarg0: number[]): boolean;
    private constructor()
}