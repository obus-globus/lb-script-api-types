import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ShaderConstants } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/ShaderConstants.d.ts'
import type { ShaderParser$ParsedShader } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/ShaderParser$ParsedShader.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ShaderParser extends Object {
    static parseShader(paramarg0: string, paramarg1: ShaderConstants): ShaderParser$ParsedShader;
    private constructor()
    // private includeIds: Object2IntMap<string>;
    // private lines: string[];
    // private finish(): ShaderParser$ParsedShader;
    // private lineDirectiveFor(arg0: string, arg1: number): string;
    // private parseImport(arg0: string): Identifier;
    parseShader(arg0: string, arg1: string): void;
    // private prependDefineStrings(arg0: ShaderConstants): void;
    // private processImport(arg0: string): void;
}