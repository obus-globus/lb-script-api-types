import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Atom } from '../../../../../net/minecraft/util/parsing/packrat/Atom.d.ts'
import type { Dictionary$Entry } from '../../../../../net/minecraft/util/parsing/packrat/Dictionary$Entry.d.ts'
import type { NamedRule } from '../../../../../net/minecraft/util/parsing/packrat/NamedRule.d.ts'
import type { ParseState } from '../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Rule } from '../../../../../net/minecraft/util/parsing/packrat/Rule.d.ts'
import type { Rule$RuleAction } from '../../../../../net/minecraft/util/parsing/packrat/Rule$RuleAction.d.ts'
import type { Rule$SimpleRuleAction } from '../../../../../net/minecraft/util/parsing/packrat/Rule$SimpleRuleAction.d.ts'
import type { Scope } from '../../../../../net/minecraft/util/parsing/packrat/Scope.d.ts'
import type { Term } from '../../../../../net/minecraft/util/parsing/packrat/Term.d.ts'
export class Dictionary<S extends Object | number | string | boolean> extends Object {
    constructor()
    // private terms: Map<Atom<Object>, Dictionary$Entry<S, Object>>;
    checkAllBound(): void;
    forward<T extends Object | number | string | boolean>(name: Atom<T>): NamedRule<S, T>;
    // private getOrCreateEntry<T extends Object | number | string | boolean>(name: Atom<T>): Dictionary$Entry<S, T>;
    getOrThrow<T extends Object | number | string | boolean>(name: Atom<T>): NamedRule<S, T>;
    named<T extends Object | number | string | boolean>(name: Atom<T>): Term<S>;
    namedWithAlias<T extends Object | number | string | boolean>(nameToParse: Atom<T>, nameToStore: Atom<T>): Term<S>;
    put<T extends Object | number | string | boolean>(name: Atom<T>, entry: Rule<S, T>): NamedRule<S, T>;
    put<T extends Object | number | string | boolean>(name: Atom<T>, term: Term<S>, action: (param0: Scope) => T): NamedRule<S, T>;
    putComplex<T extends Object | number | string | boolean>(name: Atom<T>, term: Term<S>, action: (param0: ParseState<S>) => T): NamedRule<S, T>;
}