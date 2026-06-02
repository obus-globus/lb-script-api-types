import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Relative } from '../../../../../net/minecraft/world/entity/Relative.d.ts'
import type { TeleportTransition$PostTeleportTransition } from '../../../../../net/minecraft/world/level/portal/TeleportTransition$PostTeleportTransition.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TeleportTransition extends Record {
    static DO_NOTHING: (param0: Entity) => void;
    static PLACE_PORTAL_TICKET: (param0: Entity) => void;
    static PLAY_PORTAL_SOUND: (param0: Entity) => void;
    static createDefault(paramplayer: ServerPlayer, parampostTeleportTransition: (param0: Entity) => void): TeleportTransition;
    static missingRespawnBlock(paramplayer: ServerPlayer, parampostTeleportTransition: (param0: Entity) => void): TeleportTransition;
    // private asPassenger: boolean;
    // private deltaMovement: Vec3;
    // private missingRespawnBlock: boolean;
    // private newLevel: ServerLevel;
    // private position: Vec3;
    // private postTeleportTransition: (param0: Entity) => void;
    // private relatives: Relative[];
    // private xRot: number;
    // private yRot: number;
    asPassenger(): boolean;
    deltaMovement(): Vec3;
    equals(o: Object | null): boolean;
    hashCode(): number;
    missingRespawnBlock(): boolean;
    newLevel(): ServerLevel;
    position(): Vec3;
    postTeleportTransition(): (param0: Entity) => void;
    relatives(): Relative[];
    toString(): string;
    transitionAsPassenger(): TeleportTransition;
    withPosition(position: Vec3): TeleportTransition;
    withRotation(yRot: number, xRot: number): TeleportTransition;
    xRot(): number;
    yRot(): number;
}