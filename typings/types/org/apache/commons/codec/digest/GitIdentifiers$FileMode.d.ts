import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class GitIdentifiers$FileMode extends Enum<GitIdentifiers$FileMode> {
    static DIRECTORY: GitIdentifiers$FileMode;
    static EXECUTABLE: GitIdentifiers$FileMode;
    static GIT_LINK: GitIdentifiers$FileMode;
    static REGULAR: GitIdentifiers$FileMode;
    static SYMBOLIC_LINK: GitIdentifiers$FileMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): GitIdentifiers$FileMode;
    static values(): GitIdentifiers$FileMode[];
    private constructor(arg2: number[])
    // private modeBytes: number[];
    name(): "DIRECTORY" | "EXECUTABLE" | "GIT_LINK" | "REGULAR" | "SYMBOLIC_LINK";
}