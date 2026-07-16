import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClientIntent extends Enum<ClientIntent> {
    static LOGIN: ClientIntent;
    static STATUS: ClientIntent;
    static TRANSFER: ClientIntent;
    static byId(paramid: number): ClientIntent;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ClientIntent;
    static values(): ClientIntent[];
    private constructor()
    id(): number;
    name(): "STATUS" | "LOGIN" | "TRANSFER";
}