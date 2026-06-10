import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Control } from '../../../../../net/minecraft/util/parsing/packrat/Control.d.ts'
import type { ErrorCollector } from '../../../../../net/minecraft/util/parsing/packrat/ErrorCollector.d.ts'
import type { NamedRule } from '../../../../../net/minecraft/util/parsing/packrat/NamedRule.d.ts'
import type { Scope } from '../../../../../net/minecraft/util/parsing/packrat/Scope.d.ts'
export interface ParseState<S extends Object | number | string | boolean> extends Object{
    acquireControl(): Control;
    errorCollector(): ErrorCollector<S>;
    input(): S;
    mark(): number;
    parse<T extends Object | number | string | boolean>(rule: NamedRule<S, T>): T;
    parseTopRule<T extends Object | number | string | boolean>(rule: NamedRule<S, T>): Optional<T>;
    releaseControl(): void;
    restore(mark: number): void;
    scope(): Scope;
    silent(): ParseState<S>;
}