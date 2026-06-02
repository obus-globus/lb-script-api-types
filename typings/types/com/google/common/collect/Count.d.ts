import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Count extends Object implements Serializable {
    constructor(value: number)
    // private value: number;
    add(delta: number): void;
    addAndGet(delta: number): number;
    equals(obj: Object | null): boolean;
    get(): number;
    getAndSet(newValue: number): number;
    hashCode(): number;
    set(newValue: number): void;
    toString(): string;
}