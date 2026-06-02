import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ClientAuth extends Enum<ClientAuth> {
    static NONE: ClientAuth;
    static OPTIONAL: ClientAuth;
    static REQUIRE: ClientAuth;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientAuth;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "OPTIONAL" | "REQUIRE";
}