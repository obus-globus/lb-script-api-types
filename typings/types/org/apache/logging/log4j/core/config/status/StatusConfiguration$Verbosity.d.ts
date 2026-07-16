import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class StatusConfiguration$Verbosity extends Enum<StatusConfiguration$Verbosity> {
    static QUIET: StatusConfiguration$Verbosity;
    static VERBOSE: StatusConfiguration$Verbosity;
    static toVerbosity(paramvalue: string): StatusConfiguration$Verbosity;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): StatusConfiguration$Verbosity;
    static values(): StatusConfiguration$Verbosity[];
    private constructor()
    name(): "QUIET" | "VERBOSE";
}