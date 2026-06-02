import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DefaultESModuleLoader$CanonicalModuleKey extends Record {
    constructor(canonicalPath: string, importAttributes: Map<TruffleString, TruffleString>)
    // private canonicalPath: string;
    // private importAttributes: Map<TruffleString, TruffleString>;
    canonicalPath(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    importAttributes(): Map<TruffleString, TruffleString>;
    toString(): string;
}