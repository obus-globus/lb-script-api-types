import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Helpers for reading and adjusting the local player's movement (the `MovementUtil` global).
 */
export class ScriptMovementUtil extends Object {
    static INSTANCE: ScriptMovementUtil;
    /**
     * Returns the player's current horizontal movement speed.
     */
    getSpeed(): number;
    /**
     * Returns whether the player is currently moving horizontally.
     */
    isMoving(): boolean;
    /**
     * Applies strafe movement to the player, steering the current velocity toward the movement-input direction.
     */
    strafe(): void;
    /**
     * Applies strafe movement using the given horizontal speed.
     *
     * @param speed the horizontal speed to strafe at
     */
    strafeWithSpeed(speed: number): void;
    /**
     * Applies strafe movement using both a horizontal speed and a strength.
     *
     * @param speed the horizontal speed to strafe at
     * @param strength the strafe strength
     */
    strafeWithSpeedAndStrength(speed: number, strength: number): void;
    /**
     * Applies strafe movement using the given strength (how strongly the velocity is steered toward the input direction).
     *
     * @param strength the strafe strength
     */
    strafeWithStrength(strength: number): void;
}