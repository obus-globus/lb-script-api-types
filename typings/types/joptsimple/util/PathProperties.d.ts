import type { Class } from '../../java/lang/Class.d.ts'
import type { Path } from '../../java/nio/file/Path.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class PathProperties extends Enum<PathProperties> {
    static DIRECTORY_EXISTING: PathProperties;
    static FILE_EXISTING: PathProperties;
    static FILE_OVERWRITABLE: PathProperties;
    static NOT_EXISTING: PathProperties;
    static READABLE: PathProperties;
    static WRITABLE: PathProperties;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PathProperties;
    static values(): PathProperties[];
    constructor(arg2: string, arg3: PathProperties)
    // private messageKey: string;
    accept(arg0: Path): boolean;
    getMessageKey(): string;
    name(): "FILE_EXISTING" | "DIRECTORY_EXISTING" | "NOT_EXISTING" | "FILE_OVERWRITABLE" | "READABLE" | "WRITABLE";
}