import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ScriptNetworkUtil extends Object {
    static INSTANCE: ScriptNetworkUtil;
    movePlayerGround(onGround: boolean, horizontalCollision: boolean): void;
    movePlayerLook(yaw: number, pitch: number, onGround: boolean, horizontalCollision: boolean): void;
    movePlayerPosition(x: number, y: number, z: number, onGround: boolean, horizontalCollision: boolean): void;
    movePlayerPositionAndLook(x: number, y: number, z: number, yaw: number, pitch: number, onGround: boolean, horizontalCollision: boolean): void;
    sendChatMessage(message: string): void;
    sendCommand(command: string): void;
}