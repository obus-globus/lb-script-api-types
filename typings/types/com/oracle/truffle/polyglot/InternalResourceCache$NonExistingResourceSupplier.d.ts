import type { InternalResource } from '../../../../com/oracle/truffle/api/InternalResource.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InternalResourceCache$NonExistingResourceSupplier extends Record implements Supplier<InternalResource> {
    private constructor(component: string, resource: string)
    // private component: string;
    // private resource: string;
    component(): string;
    equals(o: Object | null): boolean;
    get(): InternalResource;
    hashCode(): number;
    resource(): string;
    toString(): string;
}