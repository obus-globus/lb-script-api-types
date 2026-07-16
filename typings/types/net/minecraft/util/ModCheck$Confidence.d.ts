import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ModCheck$Confidence extends Enum<ModCheck$Confidence> {
    static DEFINITELY: ModCheck$Confidence;
    static PROBABLY_NOT: ModCheck$Confidence;
    static VERY_LIKELY: ModCheck$Confidence;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ModCheck$Confidence;
    static values(): ModCheck$Confidence[];
    private constructor(description: string, shouldReportAsModified: boolean)
    // private description: string;
    // private shouldReportAsModified: boolean;
    name(): "PROBABLY_NOT" | "VERY_LIKELY" | "DEFINITELY";
}