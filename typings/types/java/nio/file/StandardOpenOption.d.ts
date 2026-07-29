import type { Class } from '../../../java/lang/Class.d.ts'
import type { OpenOption } from '../../../java/nio/file/OpenOption.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class StandardOpenOption extends Enum<StandardOpenOption> implements OpenOption {
    static APPEND: StandardOpenOption;
    static CREATE: StandardOpenOption;
    static CREATE_NEW: StandardOpenOption;
    static DELETE_ON_CLOSE: StandardOpenOption;
    static DSYNC: StandardOpenOption;
    static READ: StandardOpenOption;
    static SPARSE: StandardOpenOption;
    static SYNC: StandardOpenOption;
    static TRUNCATE_EXISTING: StandardOpenOption;
    static WRITE: StandardOpenOption;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): StandardOpenOption;
    static values(): StandardOpenOption[];
    private constructor()
    name(): "READ" | "WRITE" | "APPEND" | "TRUNCATE_EXISTING" | "CREATE" | "CREATE_NEW" | "DELETE_ON_CLOSE" | "SPARSE" | "SYNC" | "DSYNC";
}