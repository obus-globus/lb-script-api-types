import type { Module$ImportPhase } from '../../../../../../com/oracle/js/parser/ir/Module$ImportPhase.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ImportCallNode$ContinueDynamicImportPayload extends Record {
    constructor(promiseCapability: PromiseCapabilityRecord, phase: Module$ImportPhase, continueDynamicImportCallback: JSFunctionObject)
    // private continueDynamicImportCallback: JSFunctionObject;
    // private phase: Module$ImportPhase;
    // private promiseCapability: PromiseCapabilityRecord;
    continueDynamicImportCallback(): JSFunctionObject;
    equals(o: Object | null): boolean;
    hashCode(): number;
    phase(): Module$ImportPhase;
    promiseCapability(): PromiseCapabilityRecord;
    toString(): string;
}