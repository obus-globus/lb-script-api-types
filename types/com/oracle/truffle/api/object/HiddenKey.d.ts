import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HiddenKey extends Object implements TruffleObject {
    constructor(name: string)
    readonly name: string;
    equals(obj: Object | null): boolean;
    getName(): string;
    hashCode(): number;
    toDisplayString(allowSideEffects: boolean): string;
    toString(): string;
}