import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractAssumption extends Object implements Assumption {
    static ALWAYS_VALID: Assumption;
    static NEVER_VALID: Assumption;
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