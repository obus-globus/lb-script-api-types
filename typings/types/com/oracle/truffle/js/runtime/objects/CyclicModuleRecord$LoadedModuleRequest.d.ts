import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Module$ModuleRequest } from '../../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CyclicModuleRecord$LoadedModuleRequest extends Record {
    static of(paramrequest: Module$ModuleRequest): CyclicModuleRecord$LoadedModuleRequest;
    constructor(specifier: TruffleString, attributes: JavaMap<TruffleString, TruffleString>)
    // private attributes: JavaMap<TruffleString, TruffleString>;
    // private specifier: TruffleString;
    attributes(): JavaMap<TruffleString, TruffleString>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    specifier(): TruffleString;
    toString(): string;
}