import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class PrimitiveArrayBuilder<Array extends Object | number | string | boolean> extends Object {
    constructor()
    /*not mapped: */ getPosition$kotlinx_serialization_core(): number;
    build(): Array;
    ensureCapacity(requiredCapacity: number): void;
}