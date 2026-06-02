import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { ReportLevel$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/ReportLevel$Companion.d.ts'
export class ReportLevel extends Enum<ReportLevel> {
    static Companion: ReportLevel$Companion;
    static IGNORE: ReportLevel;
    static STRICT: ReportLevel;
    static WARN: ReportLevel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ReportLevel;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    readonly description: string;
    getDescription(): string;
    isIgnore(): boolean;
    isWarning(): boolean;
    name(): "IGNORE" | "WARN" | "STRICT";
}