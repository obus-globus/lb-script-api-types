import type { ContextThreadLocal } from '../../../../com/oracle/truffle/api/ContextThreadLocal.d.ts'
import type { PolyglotLocals$LocalLocation } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$LocalLocation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PolyglotLocals$AbstractContextThreadLocal<T extends unknown> extends ContextThreadLocal<T> {
    constructor()
    // private location: PolyglotLocals$LocalLocation;
    createLocation(localIndex: number): PolyglotLocals$LocalLocation;
    initializeLocation(l: PolyglotLocals$LocalLocation): void;
}