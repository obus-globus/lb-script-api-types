import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Context$Builder } from '../../../org/graalvm/polyglot/Context$Builder.d.ts'
import type { Engine } from '../../../org/graalvm/polyglot/Engine.d.ts'
import type { Source } from '../../../org/graalvm/polyglot/Source.d.ts'
import type { Value } from '../../../org/graalvm/polyglot/Value.d.ts'
import type { AbstractPolyglotImpl$AbstractContextDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractContextDispatch.d.ts'
export class Context extends Object implements AutoCloseable {
    static create(parampermittedLanguages: (Object | null)[]): Context;
    static getCurrent(): Context;
    static newBuilder(parampermittedLanguages: (Object | null)[]): Context$Builder;
    private constructor()
    private constructor(creatorAPI: Context)
    constructor(dispatch: AbstractPolyglotImpl$AbstractContextDispatch, receiver: T, parentContext: Context, engine: Engine)
    // private creatorContext: Context;
    // private currentAPI: Context;
    // private dispatch: AbstractPolyglotImpl$AbstractContextDispatch;
    readonly engine: Engine;
    // private parent: Context;
    // private receiver: Object;
    asValue(hostValue: Object): Value;
    // private checkCreatorAccess(operation: string): void;
    close(): void;
    close(cancelIfExecuting: boolean): void;
    enter(): void;
    equals(obj: Object | null): boolean;
    eval(languageId: string, source: CharSequence): Value;
    eval(source: Source): Value;
    getBindings(languageId: string): Value;
    getEngine(): Engine;
    getPolyglotBindings(): Value;
    hashCode(): number;
    initialize(languageId: string): boolean;
    interrupt(timeout: Duration): void;
    leave(): void;
    parse(languageId: string, source: CharSequence): Value;
    parse(source: Source): Value;
    resetLimits(): void;
    safepoint(): void;
}