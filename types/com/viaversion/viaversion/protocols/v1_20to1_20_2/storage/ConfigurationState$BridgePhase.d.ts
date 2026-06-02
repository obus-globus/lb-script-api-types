import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ConfigurationState$BridgePhase extends Enum<ConfigurationState$BridgePhase> {
    static CONFIGURATION: ConfigurationState$BridgePhase;
    static NONE: ConfigurationState$BridgePhase;
    static PROFILE_SENT: ConfigurationState$BridgePhase;
    static REENTERING_CONFIGURATION: ConfigurationState$BridgePhase;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ConfigurationState$BridgePhase;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "PROFILE_SENT" | "CONFIGURATION" | "REENTERING_CONFIGURATION";
}