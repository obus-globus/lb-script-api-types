import type { EventListener } from '../../../../../../../java/util/EventListener.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUNotifier$NotifyThread } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUNotifier$NotifyThread.d.ts'
export abstract class ICUNotifier extends Object {
    constructor()
    // private listeners: EventListener[];
    // private notifyLock: Object;
    // private notifyThread: ICUNotifier$NotifyThread;
    acceptsListener(l: EventListener): boolean;
    addListener(l: EventListener): void;
    notifyChanged(): void;
    notifyListener(l: EventListener): void;
    removeListener(l: EventListener): void;
}