import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Helpers for sending movement, chat and command packets to the server (the `NetworkUtil` global).
 */
export class ScriptNetworkUtil extends Object {
    static INSTANCE: ScriptNetworkUtil;
    /**
     * Sends a status-only movement packet (no position/rotation), reporting the on-ground and horizontal-collision state.
     *
     * @param onGround whether the player is on the ground
     * @param horizontalCollision whether the player is horizontally colliding
     */
    movePlayerGround(onGround: boolean, horizontalCollision: boolean): void;
    /**
     * Sends a rotation-only movement packet with the given look angles.
     *
     * @param yaw the yaw angle
     * @param pitch the pitch angle
     * @param onGround whether the player is on the ground
     * @param horizontalCollision whether the player is horizontally colliding
     */
    movePlayerLook(yaw: number, pitch: number, onGround: boolean, horizontalCollision: boolean): void;
    /**
     * Sends a position movement packet with the given coordinates.
     *
     * @param x the x coordinate
     * @param y the y coordinate
     * @param z the z coordinate
     * @param onGround whether the player is on the ground
     * @param horizontalCollision whether the player is horizontally colliding
     */
    movePlayerPosition(x: number, y: number, z: number, onGround: boolean, horizontalCollision: boolean): void;
    /**
     * Sends a position-and-rotation movement packet with the given coordinates and look angles.
     *
     * @param x the x coordinate
     * @param y the y coordinate
     * @param z the z coordinate
     * @param yaw the yaw angle
     * @param pitch the pitch angle
     * @param onGround whether the player is on the ground
     * @param horizontalCollision whether the player is horizontally colliding
     */
    movePlayerPositionAndLook(x: number, y: number, z: number, yaw: number, pitch: number, onGround: boolean, horizontalCollision: boolean): void;
    /**
     * Sends a chat message to the server.
     *
     * @param message the chat message to send
     */
    sendChatMessage(message: string): void;
    /**
     * Sends a command to the server (without the leading slash).
     *
     * @param command the command to send
     */
    sendCommand(command: string): void;
}