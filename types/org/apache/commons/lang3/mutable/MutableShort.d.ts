import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
import type { Mutable } from '../../../../../org/apache/commons/lang3/mutable/Mutable.d.ts'
export class MutableShort extends Number implements Comparable<MutableShort>, Mutable<Number> {
    constructor()
    constructor(arg0: Number)
    constructor(arg0: number)
    constructor(arg0: string)
}