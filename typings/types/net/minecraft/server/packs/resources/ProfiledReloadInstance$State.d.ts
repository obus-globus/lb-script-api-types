import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { AtomicLong } from '../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ProfiledReloadInstance$State extends Record {
    constructor(name: string, preparationNanos: AtomicLong, preparationCount: AtomicLong, reloadNanos: AtomicLong, reloadCount: AtomicLong)
    // private name: string;
    // private preparationCount: AtomicLong;
    // private preparationNanos: AtomicLong;
    // private reloadCount: AtomicLong;
    // private reloadNanos: AtomicLong;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    preparationCount(): AtomicLong;
    preparationNanos(): AtomicLong;
    reloadCount(): AtomicLong;
    reloadNanos(): AtomicLong;
    toString(): string;
}