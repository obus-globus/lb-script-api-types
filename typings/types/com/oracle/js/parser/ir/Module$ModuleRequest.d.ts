import type { Module$ImportPhase } from '../../../../../com/oracle/js/parser/ir/Module$ImportPhase.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Module$ModuleRequest extends Record {
    static create(paramspecifier: TruffleString): Module$ModuleRequest;
    static create(paramspecifier: TruffleString, paramphase: Module$ImportPhase): Module$ModuleRequest;
    static create(paramspecifier: TruffleString, paramattributes: Map$Entry<TruffleString, TruffleString>[]): Module$ModuleRequest;
    static create(paramspecifier: TruffleString, paramattributes: Map$Entry<TruffleString, TruffleString>[], paramphase: Module$ImportPhase): Module$ModuleRequest;
    static create(paramspecifier: TruffleString, paramattributes: Map<TruffleString, TruffleString>): Module$ModuleRequest;
    static create(paramspecifier: TruffleString, paramattributes: Map<TruffleString, TruffleString>, paramphase: Module$ImportPhase): Module$ModuleRequest;
    constructor(specifier: TruffleString, attributes: Map<TruffleString, TruffleString>, phase: Module$ImportPhase)
    // private attributes: Map<TruffleString, TruffleString>;
    // private phase: Module$ImportPhase;
    // private specifier: TruffleString;
    attributes(): Map<TruffleString, TruffleString>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    phase(): Module$ImportPhase;
    specifier(): TruffleString;
    toString(): string;
    withAttributes(newAttributes: Map<TruffleString, TruffleString>): Module$ModuleRequest;
}