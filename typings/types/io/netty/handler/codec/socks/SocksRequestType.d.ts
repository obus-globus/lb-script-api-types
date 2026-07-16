import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksRequestType extends Enum<SocksRequestType> {
    static AUTH: SocksRequestType;
    static CMD: SocksRequestType;
    static INIT: SocksRequestType;
    static UNKNOWN: SocksRequestType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SocksRequestType;
    static values(): SocksRequestType[];
    private constructor()
    name(): "INIT" | "AUTH" | "CMD" | "UNKNOWN";
}