import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Element } from '../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { ThreadContextElement } from '../../kotlinx/coroutines/ThreadContextElement.d.ts'
export interface CopyableThreadContextElement<S extends Object | number | string | boolean> extends Object, ThreadContextElement<S>{
    copyForChild(): CopyableThreadContextElement<S>;
    mergeForChild(overwritingElement: CoroutineContext$Element): CoroutineContext;
}