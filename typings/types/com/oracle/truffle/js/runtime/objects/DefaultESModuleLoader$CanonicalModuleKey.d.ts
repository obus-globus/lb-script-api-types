import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DefaultESModuleLoader$CanonicalModuleKey extends Record {
    constructor(canonicalPath: string, importAttributes: JavaMap<TruffleString, TruffleString>)
    // private canonicalPath: string;
    // private importAttributes: JavaMap<TruffleString, TruffleString>;
    canonicalPath(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    importAttributes(): JavaMap<TruffleString, TruffleString>;
    toString(): string;
}