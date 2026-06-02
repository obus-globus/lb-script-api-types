import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Atom } from '../../../../../net/minecraft/util/parsing/packrat/Atom.d.ts'
import type { Rule } from '../../../../../net/minecraft/util/parsing/packrat/Rule.d.ts'
export interface NamedRule<S extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object{
    name(): Atom<T>;
    value(): Rule<S, T>;
}