import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { AbstractPolyglotImpl } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractInstrumentDispatch } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractInstrumentDispatch.d.ts'
export abstract class ForeignInstrumentDispatch extends AbstractPolyglotImpl$AbstractInstrumentDispatch {
    constructor(polyglot: AbstractPolyglotImpl)
    equals(impl: Object, otherImpl: Object): boolean;
    equals(other: Object | null): boolean;
    getOptions(receiver: Object): OptionDescriptor[];
    getSourceOptions(receiver: Object): OptionDescriptor[];
    lookup<T extends unknown>(receiver: Object, type: Class<T>): T;
}