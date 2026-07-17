import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntFunction } from '../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IrisApi } from '../../../../net/irisshaders/iris/api/v0/IrisApi.d.ts'
import type { IrisApiConfig } from '../../../../net/irisshaders/iris/api/v0/IrisApiConfig.d.ts'
import type { IrisProgram } from '../../../../net/irisshaders/iris/api/v0/IrisProgram.d.ts'
import type { IrisTextVertexSink } from '../../../../net/irisshaders/iris/api/v0/IrisTextVertexSink.d.ts'
export class IrisApiV0Impl extends Object implements IrisApi {
    static INSTANCE: IrisApiV0Impl;
    constructor()
    assignPipeline(arg0: RenderPipeline, arg1: IrisProgram): void;
    createTextVertexSink(arg0: number, arg1: (param0: number) => ByteBuffer): IrisTextVertexSink;
    getConfig(): IrisApiConfig;
    getMainScreenLanguageKey(): string;
    getMinorApiRevision(): number;
    getSunPathRotation(): number;
    isRenderingShadowPass(): boolean;
    isShaderPackInUse(): boolean;
    openMainIrisScreenObj(arg0: Object): Object;
}