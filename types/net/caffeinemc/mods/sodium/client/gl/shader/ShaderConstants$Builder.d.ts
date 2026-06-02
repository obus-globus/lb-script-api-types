import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ShaderConstants } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/ShaderConstants.d.ts'
export class ShaderConstants$Builder extends Object {
    private constructor()
    // private constants: { [key: string]: string };
    add(arg0: string): void;
    add(arg0: string, arg1: string): void;
    addAll(arg0: string[]): void;
    build(): ShaderConstants;
}