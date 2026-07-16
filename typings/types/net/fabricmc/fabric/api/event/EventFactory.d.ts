import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class EventFactory extends Object {
    static createArrayBacked<T extends unknown>(paramarg0: Class<Object>, paramarg1: (param0: T[]) => T): Event<T>;
    static createArrayBacked<T extends unknown>(paramarg0: Class<T>, paramarg1: T, paramarg2: (param0: T[]) => T): Event<T>;
    static createWithPhases<T extends unknown>(paramarg0: Class<Object>, paramarg1: (param0: T[]) => T, ...paramarg2: Identifier[]): Event<T>;
    static getHandlerName(paramarg0: Object): string;
    static invalidate(): void;
    static isProfilingEnabled(): boolean;
    private constructor()
}