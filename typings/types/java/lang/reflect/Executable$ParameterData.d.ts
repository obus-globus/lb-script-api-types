import type { Record } from '../../../java/lang/Record.d.ts'
import type { Parameter } from '../../../java/lang/reflect/Parameter.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Executable$ParameterData extends Record {
    constructor(parameters: Parameter[], isReal: boolean)
    // private isReal: boolean;
    // private parameters: Parameter[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isReal(): boolean;
    parameters(): Parameter[];
    toString(): string;
}