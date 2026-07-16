import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ModelPart } from '../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { UndeadRenderState } from '../../../../net/minecraft/client/renderer/entity/state/UndeadRenderState.d.ts'
import type { HumanoidArm } from '../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
export class AnimationUtils extends Object {
    static animateCrossbowCharge(paramrightArm: ModelPart, paramleftArm: ModelPart, parammaxCrossbowChargeDuration: number, paramticksUsingItem: number, paramholdingInRightArm: boolean): void;
    static animateCrossbowHold(paramrightArm: ModelPart, paramleftArm: ModelPart, paramhead: ModelPart, paramholdingInRightArm: boolean): void;
    static animateZombieArms<T extends UndeadRenderState>(paramleftArm: ModelPart, paramrightArm: ModelPart, paramaggressive: boolean, paramstate: T): void;
    static bobArms(paramrightArm: ModelPart, paramleftArm: ModelPart, paramageInTicks: number): void;
    static bobModelPart(parammodelPart: ModelPart, paramageInTicks: number, paramscale: number): void;
    static swingWeaponDown(paramrightArm: ModelPart, paramleftArm: ModelPart, parammainArm: HumanoidArm, paramattackTime: number, paramageInTicks: number): void;
    constructor()
}