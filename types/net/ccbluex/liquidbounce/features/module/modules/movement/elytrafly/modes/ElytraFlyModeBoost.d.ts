import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
import type { ElytraFlyMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/modes/ElytraFlyMode.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ElytraFlyModeBoost extends ElytraFlyMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ElytraFlyModeBoost;
    // private DECELERATION_FACTOR: number;
    // private DIVE_BOOST_MULTIPLIER: number;
    // private DIVE_SPEED_REDUCTION: number;
    // private DIVE_THRESHOLD_ANGLE: number;
    // private GRAVITY_COMPENSATION: number;
    // private GROUND_PENALTY_FACTOR: number;
    // private MAX_DIVE_SPEED_MULTIPLIER: number;
    // private MAX_PITCH_ANGLE: number;
    // private MIN_ACCELERATION_THRESHOLD: number;
    // private NATURAL_LIFT_FACTOR: number;
    // private NEAR_GROUND_HORIZONTAL_BOOST: number;
    // private NEAR_GROUND_VERTICAL_REDUCTION: number;
    // private NEGATIVE_PITCH_THRESHOLD: number;
    // private PITCH_REDUCTION_FACTOR: number;
    // private SPEED_EFFECT_MULTIPLIER: number;
    // private acceleration: number;
    // private /*not mapped: */ getAcceleration(): number;
    // private autoBoost: boolean;
    // private /*not mapped: */ getAutoBoost(): boolean;
    // private boostSpeed: number;
    // private /*not mapped: */ getBoostSpeed(): number;
    // private cachedGroundCheck: boolean;
    // private currentAcceleration: number;
    // private currentDiveSpeed: number;
    // private diveAcceleration: number;
    // private /*not mapped: */ getDiveAcceleration(): number;
    // private diveEfficiency: number;
    // private /*not mapped: */ getDiveEfficiency(): number;
    // private diveMechanics: boolean;
    // private /*not mapped: */ getDiveMechanics(): boolean;
    // private groundCheckCooldown: number;
    // private groundDistance: number;
    // private /*not mapped: */ getGroundDistance(): number;
    // private moveHandler: EventHook<PlayerMoveEvent>;
    // private smartGround: boolean;
    // private /*not mapped: */ getSmartGround(): boolean;
    // private verticalControl: number;
    // private /*not mapped: */ getVerticalControl(): number;
    // private calculateBoostVector(nearGround: boolean, divePullUpBoost: number): Vec3;
    // private calculateEffectiveSpeed(isNearGround: boolean): number;
    // private calculateVerticalMovement(currentY: number, divePullUpBoost: number, event: PlayerMoveEvent): number;
    disable(): void;
    enable(): void;
    // private handleAcceleration(shouldBoost: boolean): void;
    // private handleDiveMechanics(): number;
    // private isNearGround(): boolean;
    onTick(): void;
    // private resetState(): void;
}