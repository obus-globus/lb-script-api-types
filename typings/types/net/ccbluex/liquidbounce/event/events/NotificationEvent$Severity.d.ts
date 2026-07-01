import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
/**
 * Notification severity level: INFO, SUCCESS, ERROR, ENABLED or DISABLED.
 */
export class NotificationEvent$Severity extends Enum<NotificationEvent$Severity> {
    static DISABLED: NotificationEvent$Severity;
    static ENABLED: NotificationEvent$Severity;
    static ERROR: NotificationEvent$Severity;
    static INFO: NotificationEvent$Severity;
    static SUCCESS: NotificationEvent$Severity;
    static getEntries(): NotificationEvent$Severity[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NotificationEvent$Severity;
    static values(): (Object | null)[];
    private constructor()
    name(): "INFO" | "SUCCESS" | "ERROR" | "ENABLED" | "DISABLED";
}