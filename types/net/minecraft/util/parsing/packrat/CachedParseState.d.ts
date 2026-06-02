import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CachedParseState$PositionCache } from '../../../../../net/minecraft/util/parsing/packrat/CachedParseState$PositionCache.d.ts'
import type { CachedParseState$Silent } from '../../../../../net/minecraft/util/parsing/packrat/CachedParseState$Silent.d.ts'
import type { CachedParseState$SimpleControl } from '../../../../../net/minecraft/util/parsing/packrat/CachedParseState$SimpleControl.d.ts'
import type { Control } from '../../../../../net/minecraft/util/parsing/packrat/Control.d.ts'
import type { ErrorCollector } from '../../../../../net/minecraft/util/parsing/packrat/ErrorCollector.d.ts'
import type { NamedRule } from '../../../../../net/minecraft/util/parsing/packrat/NamedRule.d.ts'
import type { ParseState } from '../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Scope } from '../../../../../net/minecraft/util/parsing/packrat/Scope.d.ts'
export abstract class CachedParseState<S extends Object | number | string | boolean> extends Object implements ParseState<S> {
    constructor(errorCollector: ErrorCollector<S>)
    // private controlCache: CachedParseState$SimpleControl[];
    // private errorCollector: ErrorCollector<S>;
    // private nextControlToReturn: number;
    // private positionCache: CachedParseState$PositionCache[];
    // private scope: Scope;
    // private silent: CachedParseState$Silent;
    acquireControl(): Control;
    errorCollector(): ErrorCollector<S>;
    // private getCacheForPosition(index: number): CachedParseState$PositionCache;
    parse<T extends Object | number | string | boolean>(rule: NamedRule<S, T>): T;
    parseTopRule(rule: NamedRule<S, T>): Optional<T>;
    releaseControl(): void;
    scope(): Scope;
    silent(): ParseState<S>;
}