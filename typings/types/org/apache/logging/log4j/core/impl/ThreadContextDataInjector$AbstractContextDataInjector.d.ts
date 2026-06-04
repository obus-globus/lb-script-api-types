import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContextDataInjector } from '../../../../../../org/apache/logging/log4j/core/ContextDataInjector.d.ts'
import type { ContextDataProvider } from '../../../../../../org/apache/logging/log4j/core/util/ContextDataProvider.d.ts'
export abstract class ThreadContextDataInjector$AbstractContextDataInjector extends Object implements ContextDataInjector {
    constructor()
    // private providers: ContextDataProvider[];
    getValue(key: string): Object;
}