import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CompressedFileType extends Enum<CompressedFileType> {
    static BROTLI: CompressedFileType;
    static GZIP: CompressedFileType;
    static getEntries(): CompressedFileType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CompressedFileType;
    static values(): CompressedFileType[];
    private constructor(extension: string, encoding: string)
    readonly encoding: string;
    readonly extension: string;
    name(): "BROTLI" | "GZIP";
}