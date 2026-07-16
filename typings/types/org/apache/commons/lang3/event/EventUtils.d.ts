import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EventUtils extends Object {
    static addEventListener<L extends unknown>(paramarg0: Object, paramarg1: Class<L>, paramarg2: L): void;
    static bindEventsToMethod<L extends unknown>(paramarg0: Object, paramarg1: string, paramarg2: Object, paramarg3: Class<L>, ...paramarg4: string[]): void;
    constructor()
}