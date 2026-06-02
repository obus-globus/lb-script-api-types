import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ClientAvatarState extends Object {
    constructor()
    // private bob: number;
    // private bobO: number;
    // private deltaMovementOnPreviousTick: Vec3;
    // private walkDist: number;
    // private walkDistO: number;
    // private xCloak: number;
    // private xCloakO: number;
    // private yCloak: number;
    // private yCloakO: number;
    // private zCloak: number;
    // private zCloakO: number;
    addWalkDistance(added: number): void;
    deltaMovementOnPreviousTick(): Vec3;
    getBackwardsInterpolatedWalkDistance(partialTicks: number): number;
    getInterpolatedBob(partialTicks: number): number;
    getInterpolatedCloakX(partialTicks: number): number;
    getInterpolatedCloakY(partialTicks: number): number;
    getInterpolatedCloakZ(partialTicks: number): number;
    getInterpolatedWalkDistance(partialTicks: number): number;
    // private moveCloak(pos: Vec3): void;
    resetBob(): void;
    tick(position: Vec3, deltaMovement: Vec3): void;
    updateBob(tBob: number): void;
}