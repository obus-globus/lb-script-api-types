import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Identifiable } from '../../../../io/jsonwebtoken/Identifiable.d.ts'
import type { NestedCollection } from '../../../../io/jsonwebtoken/lang/NestedCollection.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NestedIdentifiableCollection<E extends Identifiable, P extends unknown> extends Object implements NestedCollection<E, P> {
    constructor(arg0: P, arg1: JavaMap<string, E>)
    // private PARENT: P;
    // private VALUES: JavaMap<string, E>;
    add(arg0: E[]): NestedCollection<E, P>;
    add(arg0: E): NestedCollection<E, P>;
    and(): P;
    assertId(arg0: E): string;
    changed(): void;
    clear(): NestedCollection<E, P>;
    // private doAdd(arg0: E): boolean;
    getValues(): JavaMap<string, E>;
    remove(arg0: E): NestedCollection<E, P>;
}