import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HandRenderer } from '../../../../net/irisshaders/iris/pathways/HandRenderer.d.ts'
import type { LocalPlayer } from '../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { SubmitNodeStorage } from '../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
export interface ItemInHandInterface extends Object{
    iris$isAnyHandSolid(): boolean;
    iris$isAnyHandTranslucent(): boolean;
    iris$renderHandsWithCustomRenderer(arg0: HandRenderer, arg1: number, arg2: PoseStack, arg3: SubmitNodeStorage, arg4: LocalPlayer, arg5: number): void;
}