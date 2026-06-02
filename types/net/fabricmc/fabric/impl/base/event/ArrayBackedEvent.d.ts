import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { EventPhaseData } from '../../../../../../net/fabricmc/fabric/impl/base/event/EventPhaseData.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ArrayBackedEvent<T extends Object | number | string | boolean> extends Event<T> {
    static DEFAULT_PHASE: Identifier;
    constructor(arg0: Class<T>, arg1: (param0: T[]) => T)
    // private handlers: T[];
    // private invokerFactory: (param0: T[]) => T;
    // private lock: Object;
    // private phases: Map<Identifier, EventPhaseData<T>>;
    // private sortedPhases: EventPhaseData<T>[];
    addPhaseOrdering(arg0: Identifier, arg1: Identifier): void;
    // private getOrCreatePhase(arg0: Identifier, arg1: boolean): EventPhaseData<T>;
    // private rebuildInvoker(arg0: number): void;
    register(arg0: T): void;
    register(arg0: Identifier, arg1: T): void;
    update(): void;
}