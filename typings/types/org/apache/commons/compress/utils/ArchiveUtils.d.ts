import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
export class ArchiveUtils extends Object {
    static isArrayZero(paramarg0: number[], paramarg1: number): boolean;
    static isEqual(paramarg0: number[], paramarg1: number[]): boolean;
    static isEqual(paramarg0: number[], paramarg1: number[], paramarg2: boolean): boolean;
    static isEqual(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number, paramarg5: number): boolean;
    static isEqual(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number, paramarg5: number, paramarg6: boolean): boolean;
    static isEqualWithNull(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number, paramarg5: number): boolean;
    static matchAsciiBuffer(paramarg0: string, paramarg1: number[]): boolean;
    static matchAsciiBuffer(paramarg0: string, paramarg1: number[], paramarg2: number, paramarg3: number): boolean;
    static sanitize(paramarg0: string): string;
    static toAsciiBytes(paramarg0: string): number[];
    static toAsciiString(paramarg0: number[]): string;
    static toAsciiString(paramarg0: number[], paramarg1: number, paramarg2: number): string;
    static toString(paramarg0: ArchiveEntry): string;
    private constructor()
}