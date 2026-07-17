import type { Accessor$Support } from '../../../../../com/oracle/truffle/api/impl/Accessor$Support.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Accessor$BytecodeSupport extends Accessor$Support {
    constructor()
    getEngineInstructionTracers<T extends unknown>(hostLanguage: Object, tracerFactory: (param0: Object | null) => T): T[];
    registerInstructionTracerFactory(hostLanguage: Object, tracerFactory: (param0: Object | null) => Object | null): void;
    registerTransitionLogger(sharingLayer: Object, logger: (param0: Object | null, param1: Object | null) => void): void;
}