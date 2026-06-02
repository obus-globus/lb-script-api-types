import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FileSystem extends Enum<FileSystem> {
    static GENERIC: FileSystem;
    static LINUX: FileSystem;
    static MAC_OSX: FileSystem;
    static WINDOWS: FileSystem;
    static getCurrent(): FileSystem;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FileSystem;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: boolean, arg4: boolean, arg5: number, arg6: number, arg7: number[], arg8: string[], arg9: boolean, arg10: boolean, arg11: string)
    readonly blockSize: number;
    readonly casePreserving: boolean;
    readonly caseSensitive: boolean;
    readonly illegalFileNameChars: number[];
    readonly maxFileNameLength: number;
    readonly maxPathLength: number;
    readonly nameSeparator: string;
    // private nameSeparatorOther: string;
    readonly reservedFileNames: string[];
    // private reservedFileNamesExtensions: boolean;
    // private supportsDriveLetter: boolean;
    getBlockSize(): number;
    getIllegalFileNameChars(): string[];
    getIllegalFileNameCodePoints(): number[];
    getMaxFileNameLength(): number;
    getMaxPathLength(): number;
    getNameSeparator(): string;
    getReservedFileNames(): string[];
    isCasePreserving(): boolean;
    isCaseSensitive(): boolean;
    // private isIllegalFileNameChar(arg0: number): boolean;
    isLegalFileName(arg0: CharSequence): boolean;
    isReservedFileName(arg0: CharSequence): boolean;
    normalizeSeparators(arg0: string): string;
    supportsDriveLetter(): boolean;
    toLegalFileName(arg0: string, arg1: string): string;
    trimExtension(arg0: CharSequence): CharSequence;
    name(): "GENERIC" | "LINUX" | "MAC_OSX" | "WINDOWS";
}