import type { Class } from '../../../java/lang/Class.d.ts'
import type { LogLevel } from '../../../jdk/jfr/internal/LogLevel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class LogTag extends Enum<LogTag> {
    static JFR: LogTag;
    static JFR_DCMD: LogTag;
    static JFR_EVENT: LogTag;
    static JFR_METADATA: LogTag;
    static JFR_METHODTRACE: LogTag;
    static JFR_PERIODIC: LogTag;
    static JFR_SETTING: LogTag;
    static JFR_START: LogTag;
    static JFR_SYSTEM: LogTag;
    static JFR_SYSTEM_BYTECODE: LogTag;
    static JFR_SYSTEM_EVENT: LogTag;
    static JFR_SYSTEM_METADATA: LogTag;
    static JFR_SYSTEM_PARSER: LogTag;
    static JFR_SYSTEM_PERIODIC: LogTag;
    static JFR_SYSTEM_SAMPLING: LogTag;
    static JFR_SYSTEM_SETTING: LogTag;
    static JFR_SYSTEM_STREAMING: LogTag;
    static JFR_SYSTEM_THROTTLE: LogTag;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LogTag;
    static values(): LogTag[];
    private constructor(arg2: number)
    // private id: number;
    // private tagSetLevel: number;
    level(): LogLevel;
    name(): "JFR" | "JFR_SYSTEM" | "JFR_SYSTEM_EVENT" | "JFR_SYSTEM_SETTING" | "JFR_SYSTEM_BYTECODE" | "JFR_SYSTEM_PARSER" | "JFR_SYSTEM_METADATA" | "JFR_SYSTEM_STREAMING" | "JFR_SYSTEM_THROTTLE" | "JFR_SYSTEM_PERIODIC" | "JFR_SYSTEM_SAMPLING" | "JFR_PERIODIC" | "JFR_METADATA" | "JFR_EVENT" | "JFR_SETTING" | "JFR_DCMD" | "JFR_START" | "JFR_METHODTRACE";
}