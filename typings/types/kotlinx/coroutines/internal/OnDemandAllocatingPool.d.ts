import type { Object } from '../../../java/lang/Object.d.ts'
export class OnDemandAllocatingPool<T extends Object | number | string | boolean> extends Object {
    constructor(maxCapacity: number, create: (param0: number) => T)
    allocate(): boolean;
    close(): T[];
    stateRepresentation(): string;
    toString(): string;
    // private tryForbidNewElements(): number;
}