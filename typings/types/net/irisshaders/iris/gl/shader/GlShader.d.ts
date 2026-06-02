import type { GlResource } from '../../../../../net/irisshaders/iris/gl/GlResource.d.ts'
import type { ShaderType } from '../../../../../net/irisshaders/iris/gl/shader/ShaderType.d.ts'
export class GlShader extends GlResource {
    constructor(arg0: ShaderType, arg1: string, arg2: string)
    readonly name: string;
    destroyInternal(): void;
    getHandle(): number;
    getName(): string;
}