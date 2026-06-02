import type { Object } from '../../../../java/lang/Object.d.ts'
export class WalkAnimationState extends Object {
    constructor()
    position: number;
    // private positionScale: number;
    readonly speed: number;
    // private speedOld: number;
    isMoving(): boolean;
    position(): number;
    position(partialTicks: number): number;
    setSpeed(speed: number): void;
    speed(): number;
    speed(partialTicks: number): number;
    stop(): void;
    update(targetSpeed: number, factor: number, positionScale: number): void;
}