import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksResponseType extends Enum<SocksResponseType> {
    static AUTH: SocksResponseType;
    static CMD: SocksResponseType;
    static INIT: SocksResponseType;
    static UNKNOWN: SocksResponseType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SocksResponseType;
    static values(): SocksResponseType[];
    private constructor()
    name(): "INIT" | "AUTH" | "CMD" | "UNKNOWN";
}