import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PlayerRideable } from '../../../../net/minecraft/world/entity/PlayerRideable.d.ts'
export interface PlayerRideableJumping extends Object, PlayerRideable{
    canJump(): boolean;
    getJumpCooldown(): number;
    getPlayerJumpPendingScale(jumpAmount: number): number;
    handleStartJump(jumpScale: number): void;
    handleStopJump(): void;
    onPlayerJump(jumpAmount: number): void;
}