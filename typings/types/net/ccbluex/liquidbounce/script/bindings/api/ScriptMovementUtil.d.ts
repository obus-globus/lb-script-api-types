import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ScriptMovementUtil extends Object {
    static INSTANCE: ScriptMovementUtil;
    getSpeed(): number;
    isMoving(): boolean;
    strafe(): void;
    strafeWithSpeed(speed: number): void;
    strafeWithSpeedAndStrength(speed: number, strength: number): void;
    strafeWithStrength(strength: number): void;
}