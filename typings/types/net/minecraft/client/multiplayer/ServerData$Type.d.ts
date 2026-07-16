import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ServerData$Type extends Enum<ServerData$Type> {
    static LAN: ServerData$Type;
    static OTHER: ServerData$Type;
    static REALM: ServerData$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ServerData$Type;
    static values(): ServerData$Type[];
    private constructor()
    name(): "LAN" | "REALM" | "OTHER";
}