import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksAuthRequestDecoder$State extends Enum<SocksAuthRequestDecoder$State> {
    static CHECK_PROTOCOL_VERSION: SocksAuthRequestDecoder$State;
    static READ_PASSWORD: SocksAuthRequestDecoder$State;
    static READ_USERNAME: SocksAuthRequestDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SocksAuthRequestDecoder$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "CHECK_PROTOCOL_VERSION" | "READ_USERNAME" | "READ_PASSWORD";
}