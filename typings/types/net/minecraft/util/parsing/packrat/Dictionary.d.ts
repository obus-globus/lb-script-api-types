import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Atom } from '../../../../../net/minecraft/util/parsing/packrat/Atom.d.ts'
import type { Dictionary$Entry } from '../../../../../net/minecraft/util/parsing/packrat/Dictionary$Entry.d.ts'
import type { NamedRule } from '../../../../../net/minecraft/util/parsing/packrat/NamedRule.d.ts'
import type { Rule } from '../../../../../net/minecraft/util/parsing/packrat/Rule.d.ts'
import type { Rule$RuleAction } from '../../../../../net/minecraft/util/parsing/packrat/Rule$RuleAction.d.ts'
import type { Rule$SimpleRuleAction } from '../../../../../net/minecraft/util/parsing/packrat/Rule$SimpleRuleAction.d.ts'
import type { Term } from '../../../../../net/minecraft/util/parsing/packrat/Term.d.ts'
export class Dictionary<S extends Object | number | string | boolean> extends Object {
    constructor()
    // private terms: Map<Atom<Object>, Dictionary$Entry<S, Object>>;
    checkAllBound(): void;
    forward(name: Atom<T>): NamedRule<S, T>;
    // private getOrCreateEntry(name: Atom<T>): Dictionary$Entry<S, T>;
    getOrThrow(name: Atom<T>): NamedRule<S, T>;
    named(name: Atom<T>): Term<S>;
    namedWithAlias(nameToParse: Atom<T>, nameToStore: Atom<T>): Term<S>;
    put(name: Atom<T>, entry: Rule<S, T>): NamedRule<S, T>;
    put(name: Atom<T>, term: Term<S>, action: (param0: S) => T): NamedRule<S, T>;
    putComplex(name: Atom<T>, term: Term<S>, action: (param0: S) => T): NamedRule<S, T>;
}