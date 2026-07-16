import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class JSContextOptions$UnhandledRejectionsTrackingMode extends Enum<JSContextOptions$UnhandledRejectionsTrackingMode> {
    static HANDLER: JSContextOptions$UnhandledRejectionsTrackingMode;
    static NONE: JSContextOptions$UnhandledRejectionsTrackingMode;
    static THROW: JSContextOptions$UnhandledRejectionsTrackingMode;
    static WARN: JSContextOptions$UnhandledRejectionsTrackingMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JSContextOptions$UnhandledRejectionsTrackingMode;
    static values(): JSContextOptions$UnhandledRejectionsTrackingMode[];
    private constructor()
    toString(): string;
    name(): "NONE" | "WARN" | "THROW" | "HANDLER";
}