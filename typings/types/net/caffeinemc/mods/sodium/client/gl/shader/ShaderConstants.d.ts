import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ShaderConstants$Builder } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/ShaderConstants$Builder.d.ts'
export class ShaderConstants extends Object {
    static builder(): ShaderConstants$Builder;
    private constructor(arg0: string[])
    // private defines: string[];
    getDefineStrings(): string[];
}