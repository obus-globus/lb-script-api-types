import type { Joiner } from '../../../../com/google/common/base/Joiner.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class Joiner$MapJoiner extends Object {
    private constructor(joiner: Joiner, keyValueSeparator: string)
    // private joiner: Joiner;
    // private keyValueSeparator: string;
    appendTo<A extends Appendable>(appendable: A, entries: Map$Entry<Object, Object>[]): A;
    appendTo<A extends Appendable>(appendable: A, parts: Iterator<Map$Entry<Object, Object>>): A;
    appendTo<A extends Appendable>(appendable: A, map: Map<Object | null, Object | null>): A;
    appendTo(builder: StringBuilder, entries: Map$Entry<Object, Object>[]): StringBuilder;
    appendTo(builder: StringBuilder, entries: Iterator<Map$Entry<Object, Object>>): StringBuilder;
    appendTo(builder: StringBuilder, map: Map<Object | null, Object | null>): StringBuilder;
    join(entries: Map$Entry<Object, Object>[]): string;
    join(entries: Iterator<Map$Entry<Object, Object>>): string;
    join(map: Map<Object | null, Object | null>): string;
    useForNull(nullText: string): Joiner$MapJoiner;
}