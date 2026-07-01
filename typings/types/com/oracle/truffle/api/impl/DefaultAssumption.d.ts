import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { AbstractAssumption } from '../../../../../com/oracle/truffle/api/impl/AbstractAssumption.d.ts'
export class DefaultAssumption extends AbstractAssumption {
    static ALWAYS_VALID: Assumption;
    static NEVER_VALID: Assumption;
    constructor(name: string)
    check(): void;
    invalidate(): void;
    invalidate(message: string): void;
    isValid(): boolean;
}