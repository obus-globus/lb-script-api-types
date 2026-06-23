import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Control } from '../../../../../net/minecraft/util/parsing/packrat/Control.d.ts'
import type { ErrorCollector } from '../../../../../net/minecraft/util/parsing/packrat/ErrorCollector.d.ts'
import type { NamedRule } from '../../../../../net/minecraft/util/parsing/packrat/NamedRule.d.ts'
import type { ParseState } from '../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Scope } from '../../../../../net/minecraft/util/parsing/packrat/Scope.d.ts'
export class CachedParseState$Silent extends Object implements ParseState<S> {
    private constructor(null_: CachedParseState$Silent)
    // private silentCollector: ErrorCollector<S>;
    acquireControl(): Control;
    errorCollector<S extends unknown>(): ErrorCollector<S>;
    input<S extends unknown>(): S;
    mark(): number;
    parse<T extends unknown, S extends unknown>(rule: NamedRule<S, T>): T;
    parseTopRule<T extends unknown, S extends unknown>(rule: NamedRule<S, T>): Optional<T>;
    releaseControl(): void;
    restore(mark: number): void;
    scope(): Scope;
    silent<S extends unknown>(): ParseState<S>;
}