import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IrisRenderingPipeline } from '../../../../../net/irisshaders/iris/pipeline/IrisRenderingPipeline.d.ts'
import type { Matrix4f } from '../../../../../org/joml/Matrix4f.d.ts'
export class DHCompat extends Object {
    static checkFrame(): boolean;
    static getFarPlane(): number;
    static getNearPlane(): number;
    static getProjection(): Matrix4f;
    static getRenderDistance(): number;
    static hasRenderingEnabled(): boolean;
    static lastPackIncompatible(): boolean;
    static run(): void;
    constructor(arg0: IrisRenderingPipeline, arg1: boolean)
    // private compatInternalInstance: Object;
    clearPipeline(): void;
    getDepthTex(): number;
    getDepthTexNoTranslucent(): number;
    getInstance(): Object;
}