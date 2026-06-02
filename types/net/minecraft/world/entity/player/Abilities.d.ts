import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Abilities$Packed } from '../../../../../net/minecraft/world/entity/player/Abilities$Packed.d.ts'
export class Abilities extends Object {
    constructor()
    flying: boolean;
    readonly flyingSpeed: number;
    instabuild: boolean;
    invulnerable: boolean;
    mayBuild: boolean;
    mayfly: boolean;
    readonly walkingSpeed: number;
    apply(packed: Abilities$Packed): void;
    getFlyingSpeed(): number;
    getWalkingSpeed(): number;
    pack(): Abilities$Packed;
    setFlyingSpeed(value: number): void;
    setWalkingSpeed(value: number): void;
}