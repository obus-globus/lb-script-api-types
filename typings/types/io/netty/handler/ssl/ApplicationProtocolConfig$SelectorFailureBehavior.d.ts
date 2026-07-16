import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ApplicationProtocolConfig$SelectorFailureBehavior extends Enum<ApplicationProtocolConfig$SelectorFailureBehavior> {
    static CHOOSE_MY_LAST_PROTOCOL: ApplicationProtocolConfig$SelectorFailureBehavior;
    static FATAL_ALERT: ApplicationProtocolConfig$SelectorFailureBehavior;
    static NO_ADVERTISE: ApplicationProtocolConfig$SelectorFailureBehavior;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ApplicationProtocolConfig$SelectorFailureBehavior;
    static values(): ApplicationProtocolConfig$SelectorFailureBehavior[];
    private constructor()
    name(): "FATAL_ALERT" | "NO_ADVERTISE" | "CHOOSE_MY_LAST_PROTOCOL";
}