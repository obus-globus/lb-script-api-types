import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ServerData$State extends Enum<ServerData$State> {
    static INCOMPATIBLE: ServerData$State;
    static INITIAL: ServerData$State;
    static PINGING: ServerData$State;
    static SUCCESSFUL: ServerData$State;
    static UNREACHABLE: ServerData$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ServerData$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "INITIAL" | "PINGING" | "UNREACHABLE" | "INCOMPATIBLE" | "SUCCESSFUL";
}