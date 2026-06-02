import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ImageBinding } from '../../../../../net/irisshaders/iris/gl/image/ImageBinding.d.ts'
import type { GlUniform1iCall } from '../../../../../net/irisshaders/iris/gl/program/GlUniform1iCall.d.ts'
import type { ProgramImages$Builder } from '../../../../../net/irisshaders/iris/gl/program/ProgramImages$Builder.d.ts'
export class ProgramImages extends Object {
    static builder(paramarg0: number): ProgramImages$Builder;
    private constructor(arg0: ImageBinding[], arg1: GlUniform1iCall[])
    // private imageBindings: ImageBinding[];
    // private initializer: GlUniform1iCall[];
    getActiveImages(): number;
    update(): void;
}