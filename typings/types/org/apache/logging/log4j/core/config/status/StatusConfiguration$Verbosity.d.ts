import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class StatusConfiguration$Verbosity extends Enum<StatusConfiguration$Verbosity> {
    static QUIET: StatusConfiguration$Verbosity;
    static VERBOSE: StatusConfiguration$Verbosity;
    static toVerbosity(paramvalue: string): StatusConfiguration$Verbosity;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StatusConfiguration$Verbosity;
    static values(): StatusConfiguration$Verbosity[];
    private constructor()
    name(): "QUIET" | "VERBOSE";
}