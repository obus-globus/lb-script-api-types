import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { SevenZArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZArchiveEntry.d.ts'
import type { SevenZFile } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZFile.d.ts'
export class CLI$Mode extends Enum<CLI$Mode> {
    static LIST: CLI$Mode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CLI$Mode;
    static values(): (Object | null)[];
    constructor(arg2: string, arg3: any)
    readonly message: string;
    getMessage(): string;
    takeAction(arg0: SevenZFile, arg1: SevenZArchiveEntry): void;
    name(): "LIST";
}