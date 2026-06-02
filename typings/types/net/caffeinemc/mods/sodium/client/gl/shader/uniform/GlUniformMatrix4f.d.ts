import type { GlUniform } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniform.d.ts'
import type { Matrix4fc } from '../../../../../../../../org/joml/Matrix4fc.d.ts'
export class GlUniformMatrix4f extends GlUniform<Matrix4fc> {
    constructor(arg0: number)
    set(arg0: Matrix4fc): void;
}