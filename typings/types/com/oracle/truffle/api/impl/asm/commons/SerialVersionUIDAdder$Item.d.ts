import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
export class SerialVersionUIDAdder$Item extends Object implements Comparable<SerialVersionUIDAdder$Item> {
    constructor(name: string, access: number, descriptor: string)
    // private access: number;
    // private descriptor: string;
    // private name: string;
    compareTo(item: SerialVersionUIDAdder$Item): number;
    equals(other: Object | null): boolean;
    hashCode(): number;
}