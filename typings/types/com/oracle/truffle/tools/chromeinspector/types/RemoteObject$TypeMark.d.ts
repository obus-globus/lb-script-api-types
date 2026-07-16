import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RemoteObject$TypeMark extends Enum<RemoteObject$TypeMark> {
    static MAP_ENTRIES: RemoteObject$TypeMark;
    static MAP_ENTRY: RemoteObject$TypeMark;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RemoteObject$TypeMark;
    static values(): RemoteObject$TypeMark[];
    private constructor()
    name(): "MAP_ENTRIES" | "MAP_ENTRY";
}