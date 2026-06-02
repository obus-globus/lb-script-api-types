import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
export class OnDemandAllocatingPool<T extends Object | number | string | boolean> extends Object {
    constructor(maxCapacity: number, create: Function1<number, T>)
    allocate(): boolean;
    close(): T[];
    stateRepresentation(): string;
    toString(): string;
    // private tryForbidNewElements(): number;
}