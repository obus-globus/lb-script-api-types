import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Role extends Enum<Role> {
    static CLIENT: Role;
    static SERVER: Role;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Role;
    static values(): Role[];
    private constructor()
    name(): "CLIENT" | "SERVER";
}