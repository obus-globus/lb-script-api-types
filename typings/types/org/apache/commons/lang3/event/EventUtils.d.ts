import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EventUtils extends Object {
    static addEventListener(paramarg0: Object, paramarg1: Class<Object>, paramarg2: Object | null): void;
    static bindEventsToMethod(paramarg0: Object, paramarg1: string, paramarg2: Object, paramarg3: Class<Object>, ...paramarg4: (Object | null)[]): void;
    constructor()
}