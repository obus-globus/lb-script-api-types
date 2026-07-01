import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
import type { Joiner } from '../../../../../../../org/spongepowered/include/com/google/common/base/Joiner.d.ts'
export class Joiner$MapJoiner extends Object {
    constructor(arg0: Joiner, arg1: string, arg2: Joiner)
    // private joiner: Joiner;
    // private keyValueSeparator: string;
    appendTo<A extends Appendable>(arg0: A, arg1: Iterator<Map$Entry<Object, Object>>): A;
    appendTo(arg0: StringBuilder, arg1: Map$Entry<Object, Object>[]): StringBuilder;
    appendTo(arg0: StringBuilder, arg1: Iterator<Map$Entry<Object, Object>>): StringBuilder;
    appendTo(arg0: StringBuilder, arg1: Map<Object | null, Object | null>): StringBuilder;
}