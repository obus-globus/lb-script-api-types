import type { ICUNotifier$NotifyThread } from '../../../../com/ibm/icu/impl/ICUNotifier$NotifyThread.d.ts'
import type { EventListener } from '../../../../java/util/EventListener.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ICUNotifier extends Object {
    constructor()
    // private listeners: EventListener[];
    // private notifyLock: Object;
    // private notifyThread: ICUNotifier$NotifyThread;
    acceptsListener(arg0: EventListener): boolean;
    addListener(arg0: EventListener): void;
    notifyChanged(): void;
    notifyListener(arg0: EventListener): void;
    removeListener(arg0: EventListener): void;
}