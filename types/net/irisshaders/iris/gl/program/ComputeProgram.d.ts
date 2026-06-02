import type { GlResource } from '../../../../../net/irisshaders/iris/gl/GlResource.d.ts'
import type { ProgramImages } from '../../../../../net/irisshaders/iris/gl/program/ProgramImages.d.ts'
import type { ProgramSamplers } from '../../../../../net/irisshaders/iris/gl/program/ProgramSamplers.d.ts'
import type { ProgramUniforms } from '../../../../../net/irisshaders/iris/gl/program/ProgramUniforms.d.ts'
import type { FilledIndirectPointer } from '../../../../../net/irisshaders/iris/shaderpack/FilledIndirectPointer.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
import type { Vector3i } from '../../../../../org/joml/Vector3i.d.ts'
export class ComputeProgram extends GlResource {
    static unbind(): void;
    constructor(arg0: number, arg1: ProgramUniforms, arg2: ProgramSamplers, arg3: ProgramImages)
    // private absoluteWorkGroups: Vector3i;
    // private cachedHeight: number;
    // private cachedWidth: number;
    // private cachedWorkGroups: Vector3i;
    // private images: ProgramImages;
    // private indirectPointer: FilledIndirectPointer;
    // private localSize: number[];
    // private relativeWorkGroups: Vector2f;
    // private samplers: ProgramSamplers;
    // private uniforms: ProgramUniforms;
    destroyInternal(): void;
    dispatch(arg0: number, arg1: number): void;
    getActiveImages(): number;
    getProgramId(): number;
    getWorkGroups(arg0: number, arg1: number): Vector3i;
    setWorkGroupInfo(arg0: Vector2f, arg1: Vector3i, arg2: FilledIndirectPointer): void;
    use(): void;
}