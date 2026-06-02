import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeStorage$NameTagSubmit } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage$NameTagSubmit.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class NameTagFeatureRenderer$Storage extends Object {
    constructor()
    // private nameTagSubmitsNormal: SubmitNodeStorage$NameTagSubmit[];
    // private nameTagSubmitsSeethrough: SubmitNodeStorage$NameTagSubmit[];
    add(poseStack: PoseStack, nameTagAttachment: Vec3, offset: number, name: Component, seeThrough: boolean, lightCoords: number, distanceToCameraSq: number, camera: CameraRenderState): void;
    clear(): void;
}