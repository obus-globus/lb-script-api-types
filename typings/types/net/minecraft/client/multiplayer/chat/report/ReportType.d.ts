import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ReportType extends Enum<ReportType> {
    static CHAT: ReportType;
    static SKIN: ReportType;
    static USERNAME: ReportType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ReportType;
    static values(): (Object | null)[];
    private constructor(name: string)
    // private backendName: string;
    backendName(): string;
    name(): "CHAT" | "SKIN" | "USERNAME";
}