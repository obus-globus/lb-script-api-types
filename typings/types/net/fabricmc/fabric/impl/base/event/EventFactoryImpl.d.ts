import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class EventFactoryImpl extends Object {
    static createArrayBacked(paramarg0: Class<Object>, paramarg1: (param0: (Object | null)[]) => Object | null): Event<Object>;
    static ensureContainsDefault(paramarg0: Identifier[]): void;
    static ensureNoDuplicates(paramarg0: Identifier[]): void;
    static invalidate(): void;
    private constructor()
}