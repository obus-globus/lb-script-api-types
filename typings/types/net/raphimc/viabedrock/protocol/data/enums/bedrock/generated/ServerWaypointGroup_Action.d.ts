import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ServerWaypointGroup_Action extends Enum<ServerWaypointGroup_Action> {
    static Add: ServerWaypointGroup_Action;
    static None: ServerWaypointGroup_Action;
    static Remove: ServerWaypointGroup_Action;
    static Update: ServerWaypointGroup_Action;
    static getByName(paramarg0: string): ServerWaypointGroup_Action;
    static getByName(paramarg0: string, paramarg1: ServerWaypointGroup_Action): ServerWaypointGroup_Action;
    static getByValue(paramarg0: number): ServerWaypointGroup_Action;
    static getByValue(paramarg0: number, paramarg1: ServerWaypointGroup_Action): ServerWaypointGroup_Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerWaypointGroup_Action;
    static values(): ServerWaypointGroup_Action[];
    private constructor(arg2: number)
    private constructor(arg2: ServerWaypointGroup_Action)
    readonly value: number;
    getValue(): number;
    name(): "None" | "Add" | "Remove" | "Update";
}