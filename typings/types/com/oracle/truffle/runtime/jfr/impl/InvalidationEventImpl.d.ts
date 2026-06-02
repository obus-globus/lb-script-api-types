import type { InvalidationEvent } from '../../../../../../com/oracle/truffle/runtime/jfr/InvalidationEvent.d.ts'
import type { RootFunctionEventImpl } from '../../../../../../com/oracle/truffle/runtime/jfr/impl/RootFunctionEventImpl.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
export class InvalidationEventImpl extends RootFunctionEventImpl implements InvalidationEvent {
    constructor()
    reason: string;
    setReason(invalidationReason: CharSequence): void;
}