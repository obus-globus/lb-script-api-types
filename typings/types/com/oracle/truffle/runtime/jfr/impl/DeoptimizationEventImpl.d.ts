import type { DeoptimizationEvent } from '../../../../../../com/oracle/truffle/runtime/jfr/DeoptimizationEvent.d.ts'
import type { RootFunctionEventImpl } from '../../../../../../com/oracle/truffle/runtime/jfr/impl/RootFunctionEventImpl.d.ts'
export class DeoptimizationEventImpl extends RootFunctionEventImpl implements DeoptimizationEvent {
    constructor()
    invalidated: boolean;
    reason: string;
    setInvalidated(invalidated: boolean): void;
    setReason(reason: string): void;
}