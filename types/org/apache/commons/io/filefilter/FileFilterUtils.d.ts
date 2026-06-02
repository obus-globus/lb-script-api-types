import type { File } from '../../../../../java/io/File.d.ts'
import type { FileFilter } from '../../../../../java/io/FileFilter.d.ts'
import type { FilenameFilter } from '../../../../../java/io/FilenameFilter.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOCase } from '../../../../../org/apache/commons/io/IOCase.d.ts'
import type { IOFileFilter } from '../../../../../org/apache/commons/io/filefilter/IOFileFilter.d.ts'
export class FileFilterUtils extends Object {
    static ageFileFilter(paramarg0: File): IOFileFilter;
    static ageFileFilter(paramarg0: File, paramarg1: boolean): IOFileFilter;
    static ageFileFilter(paramarg0: Date): IOFileFilter;
    static ageFileFilter(paramarg0: Date, paramarg1: boolean): IOFileFilter;
    static ageFileFilter(paramarg0: number): IOFileFilter;
    static ageFileFilter(paramarg0: number, paramarg1: boolean): IOFileFilter;
    static and(paramarg0: (Object | null)[]): IOFileFilter;
    static andFileFilter(paramarg0: IOFileFilter, paramarg1: IOFileFilter): IOFileFilter;
    static asFileFilter(paramarg0: (param0: File) => kotlin.Boolean): IOFileFilter;
    static asFileFilter(paramarg0: (param0: File, param1: string) => kotlin.Boolean): IOFileFilter;
    static directoryFileFilter(): IOFileFilter;
    static falseFileFilter(): IOFileFilter;
    static fileFileFilter(): IOFileFilter;
    static filter(paramarg0: IOFileFilter, paramarg1: (Object | null)[]): (Object | null)[];
    static filter(paramarg0: IOFileFilter, paramarg1: File[]): (Object | null)[];
    static filterList(paramarg0: IOFileFilter, paramarg1: (Object | null)[]): File[];
    static filterList(paramarg0: IOFileFilter, paramarg1: File[]): File[];
    static filterSet(paramarg0: IOFileFilter, paramarg1: (Object | null)[]): File[];
    static filterSet(paramarg0: IOFileFilter, paramarg1: File[]): File[];
    static magicNumberFileFilter(paramarg0: number[]): IOFileFilter;
    static magicNumberFileFilter(paramarg0: number[], paramarg1: number): IOFileFilter;
    static magicNumberFileFilter(paramarg0: string): IOFileFilter;
    static magicNumberFileFilter(paramarg0: string, paramarg1: number): IOFileFilter;
    static makeCVSAware(paramarg0: IOFileFilter): IOFileFilter;
    static makeDirectoryOnly(paramarg0: IOFileFilter): IOFileFilter;
    static makeFileOnly(paramarg0: IOFileFilter): IOFileFilter;
    static makeSVNAware(paramarg0: IOFileFilter): IOFileFilter;
    static nameFileFilter(paramarg0: string): IOFileFilter;
    static nameFileFilter(paramarg0: string, paramarg1: IOCase): IOFileFilter;
    static notFileFilter(paramarg0: IOFileFilter): IOFileFilter;
    static or(paramarg0: (Object | null)[]): IOFileFilter;
    static orFileFilter(paramarg0: IOFileFilter, paramarg1: IOFileFilter): IOFileFilter;
    static prefixFileFilter(paramarg0: string): IOFileFilter;
    static prefixFileFilter(paramarg0: string, paramarg1: IOCase): IOFileFilter;
    static sizeFileFilter(paramarg0: number): IOFileFilter;
    static sizeFileFilter(paramarg0: number, paramarg1: boolean): IOFileFilter;
    static sizeRangeFileFilter(paramarg0: number, paramarg1: number): IOFileFilter;
    static suffixFileFilter(paramarg0: string): IOFileFilter;
    static suffixFileFilter(paramarg0: string, paramarg1: IOCase): IOFileFilter;
    static toList(paramarg0: (Object | null)[]): IOFileFilter[];
    static trueFileFilter(): IOFileFilter;
    constructor()
}