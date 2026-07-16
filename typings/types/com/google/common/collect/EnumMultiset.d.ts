import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EnumMultiset<E extends Enum<E>> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<E extends Enum<E>>(paramtype: Class<E>): E[];
    static create<E extends Enum<E>>(paramelements: E[]): E[];
    static create<E extends Enum<E>>(paramelements: E[], paramtype: Class<E>): E[];
}