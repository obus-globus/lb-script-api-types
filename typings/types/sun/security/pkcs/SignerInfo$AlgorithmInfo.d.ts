import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SignerInfo$AlgorithmInfo extends Record {
    private constructor(field: string, checkKey: boolean)
    // private checkKey: boolean;
    // private field: string;
    checkKey(): boolean;
    equals(arg0: Object | null): boolean;
    field(): string;
    hashCode(): number;
    toString(): string;
}