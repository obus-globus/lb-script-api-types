import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractDispatchClass } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractDispatchClass.d.ts'
export abstract class AbstractPolyglotImpl$AbstractInstrumentDispatch extends AbstractPolyglotImpl$AbstractDispatchClass {
    constructor()
    constructor(engineImpl: AbstractPolyglotImpl)
    equals(impl: Object, otherImpl: Object): boolean;
    getId(receiver: Object): string;
    getName(receiver: Object): string;
    getOptions(receiver: Object): OptionDescriptor[];
    getSourceOptions(receiver: Object): OptionDescriptor[];
    getVersion(receiver: Object): string;
    getWebsite(receiver: Object): string;
    hashCode(impl: Object): number;
    lookup<T extends Object | number | string | boolean>(receiver: Object, type: Class<T>): T;
}