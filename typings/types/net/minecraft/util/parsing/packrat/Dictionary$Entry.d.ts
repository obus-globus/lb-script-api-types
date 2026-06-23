import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Atom } from '../../../../../net/minecraft/util/parsing/packrat/Atom.d.ts'
import type { NamedRule } from '../../../../../net/minecraft/util/parsing/packrat/NamedRule.d.ts'
import type { Rule } from '../../../../../net/minecraft/util/parsing/packrat/Rule.d.ts'
export class Dictionary$Entry<S extends unknown, T extends unknown> extends Object implements Supplier<string>, NamedRule<S, T> {
    private constructor(name: Atom<T>)
    // private name: Atom<T>;
    // private value: Rule<S, T>;
    get(): string;
    name(): Atom<T>;
    value(): Rule<S, T>;
}