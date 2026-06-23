import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class Event<T extends unknown> extends Object {
    static DEFAULT_PHASE: Identifier;
    constructor()
    // private invoker: T;
    addPhaseOrdering(arg0: Identifier, arg1: Identifier): void;
    invoker(): T;
    register(arg0: T): void;
    register(arg0: Identifier, arg1: T): void;
}