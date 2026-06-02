import type { GlProgram } from '../../../../../com/mojang/blaze3d/opengl/GlProgram.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PartialShader } from '../../../../../net/irisshaders/iris/pipeline/programs/PartialShader.d.ts'
import type { ShaderKey } from '../../../../../net/irisshaders/iris/pipeline/programs/ShaderKey.d.ts'
export class ShaderSupplier extends Record {
    constructor(key: ShaderKey, id: PartialShader, shader: () => GlProgram)
    // private id: PartialShader;
    // private key: ShaderKey;
    // private shader: () => GlProgram;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): PartialShader;
    key(): ShaderKey;
    shader(): () => GlProgram;
    toString(): string;
}