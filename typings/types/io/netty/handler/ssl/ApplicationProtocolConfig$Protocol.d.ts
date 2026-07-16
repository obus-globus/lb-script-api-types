import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ApplicationProtocolConfig$Protocol extends Enum<ApplicationProtocolConfig$Protocol> {
    static ALPN: ApplicationProtocolConfig$Protocol;
    static NONE: ApplicationProtocolConfig$Protocol;
    static NPN: ApplicationProtocolConfig$Protocol;
    static NPN_AND_ALPN: ApplicationProtocolConfig$Protocol;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ApplicationProtocolConfig$Protocol;
    static values(): ApplicationProtocolConfig$Protocol[];
    private constructor()
    name(): "NONE" | "NPN" | "ALPN" | "NPN_AND_ALPN";
}