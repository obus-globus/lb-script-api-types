import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BatchCollector } from '../../../../net/ccbluex/liquidbounce/render/BatchCollector.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
export class WorldRenderEnvironment$Companion$ActiveWorldFrame extends Record {
    constructor(renderTarget: RenderTarget, poseStack: PoseStack, camera: Camera, collector: BatchCollector)
    // private camera: Camera;
    /*not mapped: */ camera(): Camera;
    // private collector: BatchCollector;
    /*not mapped: */ collector(): BatchCollector;
    // private poseStack: PoseStack;
    /*not mapped: */ poseStack(): PoseStack;
    // private renderTarget: RenderTarget;
    /*not mapped: */ renderTarget(): RenderTarget;
    component1(): RenderTarget;
    component2(): PoseStack;
    component3(): Camera;
    component4(): BatchCollector;
    copy(renderTarget: RenderTarget, poseStack: PoseStack, camera: Camera, collector: BatchCollector): WorldRenderEnvironment$Companion$ActiveWorldFrame;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}