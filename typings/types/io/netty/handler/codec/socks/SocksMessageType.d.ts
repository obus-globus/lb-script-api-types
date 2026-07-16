import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksMessageType extends Enum<SocksMessageType> {
    static REQUEST: SocksMessageType;
    static RESPONSE: SocksMessageType;
    static UNKNOWN: SocksMessageType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SocksMessageType;
    static values(): SocksMessageType[];
    private constructor()
    name(): "REQUEST" | "RESPONSE" | "UNKNOWN";
}