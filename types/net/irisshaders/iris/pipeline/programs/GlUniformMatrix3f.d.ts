import type { GlUniform } from '../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniform.d.ts'
import type { Matrix3fc } from '../../../../../org/joml/Matrix3fc.d.ts'
export class GlUniformMatrix3f extends GlUniform<Matrix3fc> {
    constructor(arg0: number)
    set(arg0: Matrix3fc): void;
}