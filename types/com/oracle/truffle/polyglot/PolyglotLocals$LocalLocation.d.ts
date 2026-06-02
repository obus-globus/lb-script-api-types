import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PolyglotLocals$LocalLocation extends Object {
    private constructor(engine: PolyglotEngineImpl, index: number)
    // private engine: PolyglotEngineImpl;
    // private index: number;
    // private profiledType: Class<Object>;
    // private invalidLocalMessage(context: PolyglotContextImpl, locals: Object[]): string;
    invokeFactory(context: PolyglotContextImpl, thread: Thread): Object;
    invokeFactoryImpl(context: PolyglotContextImpl, thread: Thread): Object;
    readLocal(context: PolyglotContextImpl, locals: Object[], threadLocal: boolean): Object;
    // private readLocalFast(locals: Object[], threadLocal: boolean): Object;
}