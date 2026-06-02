import type { Module$ImportPhase } from '../../../../../../com/oracle/js/parser/ir/Module$ImportPhase.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { AbstractModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ImportCallNode$LinkAndEvaluateArgs extends Record {
    private constructor(moduleRecord: AbstractModuleRecord, promiseCapability: PromiseCapabilityRecord, phase: Module$ImportPhase, onRejected: JSFunctionObject)
    // private moduleRecord: AbstractModuleRecord;
    // private onRejected: JSFunctionObject;
    // private phase: Module$ImportPhase;
    // private promiseCapability: PromiseCapabilityRecord;
    equals(o: Object | null): boolean;
    hashCode(): number;
    moduleRecord(): AbstractModuleRecord;
    onRejected(): JSFunctionObject;
    phase(): Module$ImportPhase;
    promiseCapability(): PromiseCapabilityRecord;
    toString(): string;
}