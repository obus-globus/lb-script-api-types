import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
export class EventFactory extends Object {
    static createArrayBacked(paramarg0: Class<Object>, paramarg1: (param0: Object | null) => Object | null): Event<Object>;
    static createArrayBacked(paramarg0: Class<Object>, paramarg1: Object | null, paramarg2: (param0: Object | null) => Object | null): Event<Object>;
    static createWithPhases(paramarg0: Class<Object>, paramarg1: (param0: Object | null) => Object | null, ...paramarg2: (Object | null)[]): Event<Object>;
    static getHandlerName(paramarg0: Object): string;
    static invalidate(): void;
    static isProfilingEnabled(): boolean;
    private constructor()
}