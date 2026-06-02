import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Accessor$JavaLangSupport extends Object {
    constructor()
    currentCarrierThread(): Thread;
    registerVirtualThreadMountHooks(onMount: (param0: Thread) => void, onUnmount: (param0: Thread) => void): void;
}