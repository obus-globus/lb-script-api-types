import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringTemplate } from '../../../../../net/minecraft/commands/functions/StringTemplate.d.ts'
export class ParsedTemplate extends Object {
    static CODEC: Codec<ParsedTemplate>;
    static VARIABLE_CODEC: Codec<string>;
    private constructor(raw: string, parsed: StringTemplate)
    // private parsed: StringTemplate;
    // private raw: string;
    instantiate(arguments: { [key: string]: string }): string;
}