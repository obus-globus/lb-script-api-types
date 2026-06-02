import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { InteractionHand } from '../../../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Pose } from '../../../../../../../../net/minecraft/world/entity/Pose.d.ts'
export class PosPoseSnapshot extends Record {
    constructor(x: number, y: number, z: number, lastX: number, lastY: number, lastZ: number, handSwinging: boolean, handSwingTicks: number, handSwingProgress: number, yaw: number, lastYaw: number, pitch: number, lastPitch: number, bodyYaw: number, lastBodyYaw: number, headYaw: number, lastHeadYaw: number, pose: Pose, preferredHand: InteractionHand, inventory: (Object | null)[], limbPos: number)
    // private bodyYaw: number;
    /*not mapped: */ bodyYaw(): number;
    // private handSwingProgress: number;
    /*not mapped: */ handSwingProgress(): number;
    // private handSwingTicks: number;
    /*not mapped: */ handSwingTicks(): number;
    // private handSwinging: boolean;
    /*not mapped: */ handSwinging(): boolean;
    // private headYaw: number;
    /*not mapped: */ headYaw(): number;
    // private inventory: (Object | null)[];
    /*not mapped: */ inventory(): (Object | null)[];
    // private lastBodyYaw: number;
    /*not mapped: */ lastBodyYaw(): number;
    // private lastHeadYaw: number;
    /*not mapped: */ lastHeadYaw(): number;
    // private lastPitch: number;
    /*not mapped: */ lastPitch(): number;
    // private lastX: number;
    /*not mapped: */ lastX(): number;
    // private lastY: number;
    /*not mapped: */ lastY(): number;
    // private lastYaw: number;
    /*not mapped: */ lastYaw(): number;
    // private lastZ: number;
    /*not mapped: */ lastZ(): number;
    // private limbPos: number;
    /*not mapped: */ limbPos(): number;
    // private pitch: number;
    /*not mapped: */ pitch(): number;
    // private pose: Pose;
    /*not mapped: */ pose(): Pose;
    // private preferredHand: InteractionHand;
    /*not mapped: */ preferredHand(): InteractionHand;
    // private x: number;
    /*not mapped: */ x(): number;
    // private y: number;
    /*not mapped: */ y(): number;
    // private yaw: number;
    /*not mapped: */ yaw(): number;
    // private z: number;
    /*not mapped: */ z(): number;
    component1(): number;
    component10(): number;
    component11(): number;
    component12(): number;
    component13(): number;
    component14(): number;
    component15(): number;
    component16(): number;
    component17(): number;
    component18(): Pose;
    component19(): InteractionHand;
    component2(): number;
    component20(): (Object | null)[];
    component21(): number;
    component3(): number;
    component4(): number;
    component5(): number;
    component6(): number;
    component7(): boolean;
    component8(): number;
    component9(): number;
    copy(x: number, y: number, z: number, lastX: number, lastY: number, lastZ: number, handSwinging: boolean, handSwingTicks: number, handSwingProgress: number, yaw: number, lastYaw: number, pitch: number, lastPitch: number, bodyYaw: number, lastBodyYaw: number, headYaw: number, lastHeadYaw: number, pose: Pose, preferredHand: InteractionHand, inventory: (Object | null)[], limbPos: number): PosPoseSnapshot;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}