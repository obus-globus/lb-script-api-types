import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IOCase } from '../../../../org/apache/commons/io/IOCase.d.ts'
export class FilenameUtils extends Object {
    static EXTENSION_SEPARATOR: string;
    static EXTENSION_SEPARATOR_STR: string;
    static concat(paramarg0: string, paramarg1: string): string;
    static directoryContains(paramarg0: string, paramarg1: string): boolean;
    static equals(paramarg0: string, paramarg1: string): boolean;
    static equals(paramarg0: string, paramarg1: string, paramarg2: boolean, paramarg3: IOCase): boolean;
    static equalsNormalized(paramarg0: string, paramarg1: string): boolean;
    static equalsNormalizedOnSystem(paramarg0: string, paramarg1: string): boolean;
    static equalsOnSystem(paramarg0: string, paramarg1: string): boolean;
    static getBaseName(paramarg0: string): string;
    static getExtension(paramarg0: string): string;
    static getFullPath(paramarg0: string): string;
    static getFullPathNoEndSeparator(paramarg0: string): string;
    static getName(paramarg0: string): string;
    static getPath(paramarg0: string): string;
    static getPathNoEndSeparator(paramarg0: string): string;
    static getPrefix(paramarg0: string): string;
    static getPrefixLength(paramarg0: string): number;
    static indexOfExtension(paramarg0: string): number;
    static indexOfLastSeparator(paramarg0: string): number;
    static isExtension(paramarg0: string, paramarg1: string): boolean;
    static isExtension(paramarg0: string, paramarg1: (Object | null)[]): boolean;
    static isExtension(paramarg0: string, paramarg1: string[]): boolean;
    static normalize(paramarg0: string): string;
    static normalize(paramarg0: string, paramarg1: boolean): string;
    static normalizeNoEndSeparator(paramarg0: string): string;
    static normalizeNoEndSeparator(paramarg0: string, paramarg1: boolean): string;
    static removeExtension(paramarg0: string): string;
    static separatorsToSystem(paramarg0: string): string;
    static separatorsToUnix(paramarg0: string): string;
    static separatorsToWindows(paramarg0: string): string;
    static wildcardMatch(paramarg0: string, paramarg1: string): boolean;
    static wildcardMatch(paramarg0: string, paramarg1: string, paramarg2: IOCase): boolean;
    static wildcardMatchOnSystem(paramarg0: string, paramarg1: string): boolean;
    constructor()
}