import type { Window } from '../../java/awt/Window.d.ts'
import type { WeakReference } from '../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AppContext } from '../../sun/awt/AppContext.d.ts'
import type { DisposerRecord } from '../../sun/java2d/DisposerRecord.d.ts'
export class Window$WindowDisposerRecord extends Object implements DisposerRecord {
    constructor(arg0: AppContext, arg1: Window)
    // private context: WeakReference<AppContext>;
    // private owner: WeakReference<Window>;
    // private weakThis: WeakReference<Window>;
    dispose(): void;
    updateOwner(): void;
}