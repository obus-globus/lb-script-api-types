import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SortableNode } from '../../../../../../net/fabricmc/fabric/impl/base/toposort/SortableNode.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class EventPhaseData<T extends unknown> extends SortableNode<EventPhaseData<T>> {
    static link<N extends SortableNode<N>>(paramarg0: N, paramarg1: N): void;
    constructor(arg0: Identifier, arg1: Class<Object>)
    // private id: Identifier;
    // private listeners: T[];
    addListener(arg0: T): void;
    getDescription(): string;
}