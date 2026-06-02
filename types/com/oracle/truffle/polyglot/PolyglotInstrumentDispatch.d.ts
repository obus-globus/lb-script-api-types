import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { AbstractPolyglotImpl$AbstractInstrumentDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractInstrumentDispatch.d.ts'
export class PolyglotInstrumentDispatch extends AbstractPolyglotImpl$AbstractInstrumentDispatch {
    constructor(impl: PolyglotImpl)
    equals(receiver: Object, otherImpl: Object): boolean;
    getId(receiver: Object): string;
    getName(receiver: Object): string;
    getOptions(receiver: Object): OptionDescriptor[];
    getSourceOptions(receiver: Object): OptionDescriptor[];
    getVersion(receiver: Object): string;
    getWebsite(receiver: Object): string;
    hashCode(receiver: Object): number;
    lookup<T extends Object | number | string | boolean>(receiver: Object, type: Class<T>): T;
}