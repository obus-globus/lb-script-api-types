import type { TruffleContext } from '../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { PolyglotLocals$AbstractContextThreadLocal } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$AbstractContextThreadLocal.d.ts'
import type { PolyglotLocals$LocalLocation } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$LocalLocation.d.ts'
import type { PolyglotSharingLayer } from '../../../../com/oracle/truffle/polyglot/PolyglotSharingLayer.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotLocals$LanguageContextThreadLocal<T extends unknown> extends PolyglotLocals$AbstractContextThreadLocal<T> {
    constructor(factory: Object)
    // private factory: Object;
    // private languageInstance: PolyglotLanguageInstance;
    // private sharingLayer: PolyglotSharingLayer;
    createLocation(index: number): PolyglotLocals$LocalLocation;
    get(): T;
    get(context: TruffleContext): T;
    get(context: TruffleContext, t: Thread): T;
    get(t: Thread): T;
    initializeLanguageInstance(instance: PolyglotLanguageInstance): void;
}