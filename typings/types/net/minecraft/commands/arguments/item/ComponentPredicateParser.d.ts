import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ComponentPredicateParser$Context } from '../../../../../net/minecraft/commands/arguments/item/ComponentPredicateParser$Context.d.ts'
import type { Grammar } from '../../../../../net/minecraft/util/parsing/packrat/commands/Grammar.d.ts'
export class ComponentPredicateParser extends Object {
    static createGrammar<T extends unknown, C extends unknown, P extends unknown>(paramcontext: ComponentPredicateParser$Context<T, C, P>): Grammar<T[]>;
    constructor()
}