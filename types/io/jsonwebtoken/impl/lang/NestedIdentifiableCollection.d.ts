import type { Identifiable } from '../../../../io/jsonwebtoken/Identifiable.d.ts'
import type { NestedCollection } from '../../../../io/jsonwebtoken/lang/NestedCollection.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NestedIdentifiableCollection<E extends Identifiable, P extends Object | number | string | boolean> extends Object implements NestedCollection<E, P> {
    constructor(arg0: P, arg1: { [key: string]: E })
    // private PARENT: P;
    // private VALUES: { [key: string]: E };
    add(arg0: E[]): NestedCollection<E, P>;
    add(arg0: E): NestedCollection<E, P>;
    and(): P;
    assertId(arg0: E): string;
    changed(): void;
    clear(): NestedCollection<E, P>;
    // private doAdd(arg0: E): boolean;
    getValues(): { [key: string]: E };
    remove(arg0: E): NestedCollection<E, P>;
}