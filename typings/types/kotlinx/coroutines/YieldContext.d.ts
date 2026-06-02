import type { AbstractCoroutineContextElement } from '../../kotlin/coroutines/AbstractCoroutineContextElement.d.ts'
import type { YieldContext$Key } from '../../kotlinx/coroutines/YieldContext$Key.d.ts'
export class YieldContext extends AbstractCoroutineContextElement {
    static Key: YieldContext$Key;
    constructor()
    dispatcherWasUnconfined: boolean;
}