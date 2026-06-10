import type { StringReader } from '../../../com/mojang/brigadier/StringReader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharPredicate } from '../../../net/minecraft/CharPredicate.d.ts'
export class ParserUtils extends Object {
    static readWhile(paramreader: StringReader, parampredicate: (param0: string) => boolean): string;
    constructor()
}