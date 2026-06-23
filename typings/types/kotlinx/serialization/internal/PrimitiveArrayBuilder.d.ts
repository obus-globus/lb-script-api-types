import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class PrimitiveArrayBuilder<Array extends unknown> extends Object {
    constructor()
    /*not mapped: */ getPosition$kotlinx_serialization_core(): number;
    build(): Array;
    ensureCapacity(requiredCapacity: number): void;
}