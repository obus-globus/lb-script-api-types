import type { GlResource } from '../../../../../net/irisshaders/iris/gl/GlResource.d.ts'
export class GlSampler extends GlResource {
    static LINEAR: GlSampler;
    static LINEAR_HW: GlSampler;
    static LINEAR_REPEAT: GlSampler;
    static MIPPED_LINEAR: GlSampler;
    static MIPPED_LINEAR_HW: GlSampler;
    static MIPPED_NEAREST: GlSampler;
    static MIPPED_NEAREST_HW: GlSampler;
    static MIPPED_NEAREST_NEAREST: GlSampler;
    static MIPPED_NEAREST_REPEAT: GlSampler;
    static NEAREST: GlSampler;
    static NEAREST_HW: GlSampler;
    static NEAREST_REPEAT: GlSampler;
    constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean)
    constructor(arg0: number)
    destroyInternal(): void;
    getId(): number;
}