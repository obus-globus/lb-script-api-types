import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../../kotlin/sequences/Sequence.d.ts'
export class ServiceLoaderKt extends Object {
    static loadServiceOrNull<T extends unknown>(): T | null;
    static loadServices<T extends unknown>(): T[];
    static loadServicesAsSequence<T extends unknown>(): Sequence<T>;
}