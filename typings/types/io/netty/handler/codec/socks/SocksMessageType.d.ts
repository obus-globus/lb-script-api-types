import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksMessageType extends Enum<SocksMessageType> {
    static REQUEST: SocksMessageType;
    static RESPONSE: SocksMessageType;
    static UNKNOWN: SocksMessageType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SocksMessageType;
    static values(): SocksMessageType[];
    private constructor()
    name(): "REQUEST" | "RESPONSE" | "UNKNOWN";
}