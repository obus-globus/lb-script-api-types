import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { ReportLevel$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/ReportLevel$Companion.d.ts'
export class ReportLevel extends Enum<ReportLevel> {
    static Companion: ReportLevel$Companion;
    static IGNORE: ReportLevel;
    static STRICT: ReportLevel;
    static WARN: ReportLevel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ReportLevel;
    static values(): ReportLevel[];
    private constructor(arg2: string)
    readonly description: string;
    getDescription(): string;
    isIgnore(): boolean;
    isWarning(): boolean;
    name(): "IGNORE" | "WARN" | "STRICT";
}