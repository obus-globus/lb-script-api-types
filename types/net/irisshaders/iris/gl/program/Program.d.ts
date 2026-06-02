import type { GlResource } from '../../../../../net/irisshaders/iris/gl/GlResource.d.ts'
import type { ProgramImages } from '../../../../../net/irisshaders/iris/gl/program/ProgramImages.d.ts'
import type { ProgramSamplers } from '../../../../../net/irisshaders/iris/gl/program/ProgramSamplers.d.ts'
import type { ProgramUniforms } from '../../../../../net/irisshaders/iris/gl/program/ProgramUniforms.d.ts'
export class Program extends GlResource {
    static unbind(): void;
    constructor(arg0: number, arg1: ProgramUniforms, arg2: ProgramSamplers, arg3: ProgramImages)
    // private images: ProgramImages;
    // private samplers: ProgramSamplers;
    // private uniforms: ProgramUniforms;
    destroyInternal(): void;
    getActiveImages(): number;
    getProgramId(): number;
    use(): void;
}