import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractAssumption extends Object implements Assumption {
    static ALWAYS_VALID: Assumption;
    static NEVER_VALID: Assumption;
    static create(): Assumption;
    static create(paramname: string): Assumption;
    static isValidAssumption(paramassumption: Assumption): boolean;
    static isValidAssumption(paramassumptions: (Object | null)[]): boolean;
    constructor(name: Object)
    // private isValid: boolean;
    readonly name: Object;
    check(): void;
    getName(): string;
    invalidate(): void;
    invalidate(message: string): void;
    isValid(): boolean;
    toString(): string;
}