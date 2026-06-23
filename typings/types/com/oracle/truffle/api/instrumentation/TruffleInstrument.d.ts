import type { ContextLocal } from '../../../../../com/oracle/truffle/api/ContextLocal.d.ts'
import type { ContextThreadLocal } from '../../../../../com/oracle/truffle/api/ContextThreadLocal.d.ts'
import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleInstrument$ContextLocalFactory } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$ContextLocalFactory.d.ts'
import type { TruffleInstrument$ContextLocalProvider } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$ContextLocalProvider.d.ts'
import type { TruffleInstrument$ContextThreadLocalFactory } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$ContextThreadLocalFactory.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../../org/graalvm/options/OptionDescriptor.d.ts'
export abstract class TruffleInstrument extends Object {
    constructor()
    // private locals: TruffleInstrument$ContextLocalProvider;
    createContextLocal<T extends unknown>(factory: (param0: TruffleContext) => T): ContextLocal<T>;
    createContextThreadLocal<T extends unknown>(factory: (param0: TruffleContext, param1: Thread) => T): ContextThreadLocal<T>;
    getContextOptionDescriptors(): OptionDescriptor[];
    getOptionDescriptors(): OptionDescriptor[];
    getSourceOptionDescriptors(): OptionDescriptor[];
    onCreate(env: TruffleInstrument$Env): void;
    onDispose(env: TruffleInstrument$Env): void;
    onFinalize(env: TruffleInstrument$Env): void;
}