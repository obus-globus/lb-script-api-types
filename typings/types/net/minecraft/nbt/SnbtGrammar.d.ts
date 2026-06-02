import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Grammar } from '../../../net/minecraft/util/parsing/packrat/commands/Grammar.d.ts'
export class SnbtGrammar extends Object {
    static createParser(paramops: DynamicOps<Object>): Grammar<Object>;
    static escapeControlCharacters(paramc: string): string;
    constructor()
}