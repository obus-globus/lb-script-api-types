import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Authenticator$RequestorType extends Enum<Authenticator$RequestorType> {
    static PROXY: Authenticator$RequestorType;
    static SERVER: Authenticator$RequestorType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Authenticator$RequestorType;
    static values(): Authenticator$RequestorType[];
    private constructor()
    name(): "PROXY" | "SERVER";
}