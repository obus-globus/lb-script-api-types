import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { TypeHandler$TypeProfileEventFactory } from '../../../../../com/oracle/truffle/tools/chromeinspector/TypeHandler$TypeProfileEventFactory.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TypeHandler extends Object {
    constructor(env: TruffleInstrument$Env)
    // private currentBinding: AtomicReference<EventBinding<TypeHandler$TypeProfileEventFactory>>;
    // private env: TruffleInstrument$Env;
    clearData(): void;
    getSectionTypeProfiles(): E[];
    isStarted(): boolean;
    start(inspectInternal: boolean): boolean;
    stop(): void;
}