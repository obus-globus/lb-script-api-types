import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ServerConfigurationNetworkAddon$RegisterState extends Enum<ServerConfigurationNetworkAddon$RegisterState> {
    static NOT_RECEIVED: ServerConfigurationNetworkAddon$RegisterState;
    static NOT_SENT: ServerConfigurationNetworkAddon$RegisterState;
    static RECEIVED: ServerConfigurationNetworkAddon$RegisterState;
    static SENT: ServerConfigurationNetworkAddon$RegisterState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ServerConfigurationNetworkAddon$RegisterState;
    static values(): ServerConfigurationNetworkAddon$RegisterState[];
    private constructor()
    name(): "NOT_SENT" | "SENT" | "RECEIVED" | "NOT_RECEIVED";
}