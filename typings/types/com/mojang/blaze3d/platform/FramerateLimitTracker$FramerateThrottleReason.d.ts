import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FramerateLimitTracker$FramerateThrottleReason extends Enum<FramerateLimitTracker$FramerateThrottleReason> {
    static LONG_AFK: FramerateLimitTracker$FramerateThrottleReason;
    static NONE: FramerateLimitTracker$FramerateThrottleReason;
    static OUT_OF_LEVEL_MENU: FramerateLimitTracker$FramerateThrottleReason;
    static SHORT_AFK: FramerateLimitTracker$FramerateThrottleReason;
    static WINDOW_ICONIFIED: FramerateLimitTracker$FramerateThrottleReason;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FramerateLimitTracker$FramerateThrottleReason;
    static values(): FramerateLimitTracker$FramerateThrottleReason[];
    private constructor()
    name(): "NONE" | "WINDOW_ICONIFIED" | "LONG_AFK" | "SHORT_AFK" | "OUT_OF_LEVEL_MENU";
}