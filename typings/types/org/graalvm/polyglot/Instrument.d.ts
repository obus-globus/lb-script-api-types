import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { Engine } from '../../../org/graalvm/polyglot/Engine.d.ts'
import type { AbstractPolyglotImpl$AbstractInstrumentDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractInstrumentDispatch.d.ts'
export class Instrument extends Object {
    constructor(dispatch: AbstractPolyglotImpl$AbstractInstrumentDispatch, receiver: Object, engine: Engine)
    // private dispatch: AbstractPolyglotImpl$AbstractInstrumentDispatch;
    // private engine: Engine;
    // private receiver: Object;
    equals(obj: Object | null): boolean;
    getId(): string;
    getName(): string;
    getOptions(): OptionDescriptor[];
    getSourceOptions(): OptionDescriptor[];
    getVersion(): string;
    getWebsite(): string;
    hashCode(): number;
    lookup<T extends unknown>(type: Class<T>): T;
}