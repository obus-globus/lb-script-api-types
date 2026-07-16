import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class FramedSnappyDialect extends Enum<FramedSnappyDialect> {
    static IWORK_ARCHIVE: FramedSnappyDialect;
    static STANDARD: FramedSnappyDialect;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FramedSnappyDialect;
    static values(): FramedSnappyDialect[];
    private constructor(arg2: boolean, arg3: boolean)
    // private checksumWithCompressedChunks: boolean;
    // private streamIdentifier: boolean;
    hasStreamIdentifier(): boolean;
    usesChecksumWithCompressedChunks(): boolean;
    name(): "STANDARD" | "IWORK_ARCHIVE";
}