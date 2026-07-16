import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ClientAuth extends Enum<ClientAuth> {
    static NONE: ClientAuth;
    static OPTIONAL: ClientAuth;
    static REQUIRE: ClientAuth;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ClientAuth;
    static values(): ClientAuth[];
    private constructor()
    name(): "NONE" | "OPTIONAL" | "REQUIRE";
}