import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ApplicationProtocolConfig$SelectedListenerFailureBehavior extends Enum<ApplicationProtocolConfig$SelectedListenerFailureBehavior> {
    static ACCEPT: ApplicationProtocolConfig$SelectedListenerFailureBehavior;
    static CHOOSE_MY_LAST_PROTOCOL: ApplicationProtocolConfig$SelectedListenerFailureBehavior;
    static FATAL_ALERT: ApplicationProtocolConfig$SelectedListenerFailureBehavior;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ApplicationProtocolConfig$SelectedListenerFailureBehavior;
    static values(): ApplicationProtocolConfig$SelectedListenerFailureBehavior[];
    private constructor()
    name(): "ACCEPT" | "FATAL_ALERT" | "CHOOSE_MY_LAST_PROTOCOL";
}