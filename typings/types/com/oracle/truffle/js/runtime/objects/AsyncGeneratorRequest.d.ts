import type { Completion } from '../../../../../../com/oracle/truffle/js/runtime/objects/Completion.d.ts'
import type { Completion$Type } from '../../../../../../com/oracle/truffle/js/runtime/objects/Completion$Type.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncGeneratorRequest extends Object {
    static create(paramcompletion: Completion, parampromiseCapability: PromiseCapabilityRecord): AsyncGeneratorRequest;
    private constructor(completionType: Completion$Type, completionValue: Object, promiseCapability: PromiseCapabilityRecord)
    readonly completionType: Completion$Type;
    readonly completionValue: Object;
    readonly promiseCapability: PromiseCapabilityRecord;
    getCompletion(): Completion;
    getCompletionType(): Completion$Type;
    getCompletionValue(): Object;
    getPromiseCapability(): PromiseCapabilityRecord;
    isAbruptCompletion(): boolean;
    isNormal(): boolean;
    isReturn(): boolean;
    isThrow(): boolean;
    toString(): string;
}