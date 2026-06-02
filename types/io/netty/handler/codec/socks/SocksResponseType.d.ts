import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksResponseType extends Enum<SocksResponseType> {
    static AUTH: SocksResponseType;
    static CMD: SocksResponseType;
    static INIT: SocksResponseType;
    static UNKNOWN: SocksResponseType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SocksResponseType;
    static values(): (Object | null)[];
    private constructor()
    name(): "INIT" | "AUTH" | "CMD" | "UNKNOWN";
}