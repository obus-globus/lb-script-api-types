import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RemoteObject$TypeMark extends Enum<RemoteObject$TypeMark> {
    static ARRAY_PROPERTIES: RemoteObject$TypeMark;
    static ARRAY_SLOTS: RemoteObject$TypeMark;
    static MAP_ENTRIES: RemoteObject$TypeMark;
    static MAP_ENTRY: RemoteObject$TypeMark;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RemoteObject$TypeMark;
    static values(): RemoteObject$TypeMark[];
    private constructor()
    name(): "MAP_ENTRIES" | "MAP_ENTRY" | "ARRAY_PROPERTIES" | "ARRAY_SLOTS";
}