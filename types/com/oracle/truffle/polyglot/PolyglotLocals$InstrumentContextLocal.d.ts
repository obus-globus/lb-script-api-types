import type { TruffleContext } from '../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { PolyglotInstrument } from '../../../../com/oracle/truffle/polyglot/PolyglotInstrument.d.ts'
import type { PolyglotLocals$AbstractContextLocal } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$AbstractContextLocal.d.ts'
import type { PolyglotLocals$LocalLocation } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$LocalLocation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotLocals$InstrumentContextLocal<T extends Object | number | string | boolean> extends PolyglotLocals$AbstractContextLocal<T> {
    constructor(factory: Object)
    // private factory: Object;
    // private instrument: PolyglotInstrument;
    createLocation(localIndex: number): PolyglotLocals$LocalLocation;
    get(): T;
    get(context: TruffleContext): T;
}