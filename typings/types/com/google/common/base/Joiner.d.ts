import type { Joiner$MapJoiner } from '../../../../com/google/common/base/Joiner$MapJoiner.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Joiner extends Object {
    static on(paramseparator: string): Joiner;
    static on(paramseparator: string): Joiner;
    constructor(arg0: Joiner, arg1: Joiner)
    // private separator: string;
    appendTo<A extends Appendable>(appendable: A, first: Object, second: Object, ...rest: Object[]): A;
    appendTo<A extends Appendable>(appendable: A, parts: Object[]): A;
    appendTo<A extends Appendable>(appendable: A, parts: (Object | null)[]): A;
    appendTo<A extends Appendable>(appendable: A, parts: Iterator<Object>): A;
    appendTo(builder: StringBuilder, first: Object, second: Object, ...rest: Object[]): StringBuilder;
    appendTo(builder: StringBuilder, parts: Object[]): StringBuilder;
    appendTo(builder: StringBuilder, parts: (Object | null)[]): StringBuilder;
    appendTo(builder: StringBuilder, parts: Iterator<Object>): StringBuilder;
    join(first: Object, second: Object, ...rest: Object[]): string;
    join(parts: Object[]): string;
    join(parts: (Object | null)[]): string;
    join(parts: Iterator<Object>): string;
    skipNulls(): Joiner;
    toString(): string;
    toString(part: Object): CharSequence;
    useForNull(nullText: string): Joiner;
    withKeyValueSeparator(keyValueSeparator: string): Joiner$MapJoiner;
}