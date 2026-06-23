import type { ContextLocal } from '../../../../com/oracle/truffle/api/ContextLocal.d.ts'
import type { PolyglotLocals$LocalLocation } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$LocalLocation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PolyglotLocals$AbstractContextLocal<T extends unknown> extends ContextLocal<T> {
    constructor()
    // private location: PolyglotLocals$LocalLocation;
    createLocation(localIndex: number): PolyglotLocals$LocalLocation;
    initializeLocation(l: PolyglotLocals$LocalLocation): void;
}