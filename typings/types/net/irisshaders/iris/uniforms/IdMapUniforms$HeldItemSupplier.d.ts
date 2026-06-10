import type { Object2IntFunction } from '../../../../it/unimi/dsi/fastutil/objects/Object2IntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IrisItemLightProvider } from '../../../../net/irisshaders/iris/api/v0/item/IrisItemLightProvider.d.ts'
import type { LocalPlayer } from '../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class IdMapUniforms$HeldItemSupplier extends Object {
    constructor(arg0: InteractionHand, arg1: (param0: Object) => number, arg2: boolean)
    // private applyOldHandLight: boolean;
    // private hand: InteractionHand;
    readonly intID: number;
    // private itemIdMap: (param0: Object) => number;
    readonly lightColor: Vector3f;
    readonly lightValue: number;
    // private applyOldHandLighting(arg0: LocalPlayer, arg1: IrisItemLightProvider): IrisItemLightProvider;
    getIntID(): number;
    getLightColor(): Vector3f;
    getLightValue(): number;
    // private invalidate(): void;
    update(): void;
}