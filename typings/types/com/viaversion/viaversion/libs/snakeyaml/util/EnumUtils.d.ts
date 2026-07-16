import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class EnumUtils extends Object {
    static findEnumInsensitiveCase<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    constructor()
}