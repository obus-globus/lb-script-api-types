import type { ScopedValue$Carrier } from '../../java/lang/ScopedValue$Carrier.d.ts'
import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ScopedValue<T extends Object | number | string | boolean> extends Object {
    static newInstance(): ScopedValue<Object>;
    static where(paramarg0: ScopedValue<Object>, paramarg1: Object | null): ScopedValue$Carrier;
    private constructor()
    // private hash: number;
    bitmask(): number;
    // private findBinding(): Object;
    get(): T;
    hashCode(): number;
    isBound(): boolean;
    orElse(arg0: T): T;
    orElseThrow(arg0: () => X): T;
    // private slowGet(): T;
}