import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext$Element } from '../../../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../../../kotlin/coroutines/CoroutineContext$Key.d.ts'
export class ContextUtilsKt extends Object {
    static addToContextInDebugMode<T extends unknown>(pluginName: string, block: () => T): T;
    static initContextInDebugMode<T extends unknown>(block: () => T): T;
    static useContextElementInDebugMode<Element extends CoroutineContext$Element>(key: CoroutineContext$Key<Element>, action: (param0: Element) => void): void;
}