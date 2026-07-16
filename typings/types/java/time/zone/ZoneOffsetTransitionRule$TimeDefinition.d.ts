import type { Class } from '../../../java/lang/Class.d.ts'
import type { LocalDateTime } from '../../../java/time/LocalDateTime.d.ts'
import type { ZoneOffset } from '../../../java/time/ZoneOffset.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ZoneOffsetTransitionRule$TimeDefinition extends Enum<ZoneOffsetTransitionRule$TimeDefinition> {
    static STANDARD: ZoneOffsetTransitionRule$TimeDefinition;
    static UTC: ZoneOffsetTransitionRule$TimeDefinition;
    static WALL: ZoneOffsetTransitionRule$TimeDefinition;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ZoneOffsetTransitionRule$TimeDefinition;
    static values(): ZoneOffsetTransitionRule$TimeDefinition[];
    private constructor()
    createDateTime(arg0: LocalDateTime, arg1: ZoneOffset, arg2: ZoneOffset): LocalDateTime;
    name(): "UTC" | "WALL" | "STANDARD";
}