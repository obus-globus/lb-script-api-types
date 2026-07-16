import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Iterators$EmptyModifiableIterator extends Enum<Iterators$EmptyModifiableIterator> implements Iterator<Object> {
    static INSTANCE: Iterators$EmptyModifiableIterator;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Iterators$EmptyModifiableIterator;
    static values(): Iterators$EmptyModifiableIterator[];
    private constructor()
    forEachRemaining(arg0: (param0: Object) => void): void;
    hasNext(): boolean;
    next(): Object;
    remove(): void;
    name(): "INSTANCE";
}