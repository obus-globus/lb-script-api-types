import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ModCheck$Confidence extends Enum<ModCheck$Confidence> {
    static DEFINITELY: ModCheck$Confidence;
    static PROBABLY_NOT: ModCheck$Confidence;
    static VERY_LIKELY: ModCheck$Confidence;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ModCheck$Confidence;
    static values(): (Object | null)[];
    private constructor(description: string, shouldReportAsModified: boolean)
    // private description: string;
    // private shouldReportAsModified: boolean;
    name(): "PROBABLY_NOT" | "VERY_LIKELY" | "DEFINITELY";
}