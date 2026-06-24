import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Experiment extends Record {
    constructor(name: string, enabled: boolean)
    // private enabled: boolean;
    // private name: string;
    enabled(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
}