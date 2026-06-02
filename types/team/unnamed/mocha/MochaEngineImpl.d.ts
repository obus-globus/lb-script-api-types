import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MochaEngine } from '../../../team/unnamed/mocha/MochaEngine.d.ts'
import type { Scope$Builder } from '../../../team/unnamed/mocha/runtime/Scope$Builder.d.ts'
export class MochaEngineImpl<T extends Object | number | string | boolean> extends Object implements MochaEngine<T> {
    constructor(arg0: T, arg1: (param0: Scope$Builder) => void)
}