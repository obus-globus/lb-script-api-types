import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class Partition extends Record {
    // private distance: number;
    // private quadsBefore: (Object | null)[];
    // private quadsOn: (Object | null)[];
    distance(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    quadsBefore(): (Object | null)[];
    quadsOn(): (Object | null)[];
    toString(): string;
}