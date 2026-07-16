import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Role extends Enum<Role> {
    static CLIENT: Role;
    static SERVER: Role;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Role;
    static values(): Role[];
    private constructor()
    name(): "CLIENT" | "SERVER";
}