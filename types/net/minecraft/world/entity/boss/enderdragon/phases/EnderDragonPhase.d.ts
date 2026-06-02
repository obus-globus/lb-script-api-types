import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EnderDragon } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragon.d.ts'
import type { DragonChargePlayerPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/DragonChargePlayerPhase.d.ts'
import type { DragonDeathPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/DragonDeathPhase.d.ts'
import type { DragonHoldingPatternPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/DragonHoldingPatternPhase.d.ts'
import type { DragonHoverPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/DragonHoverPhase.d.ts'
import type { DragonLandingApproachPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/DragonLandingApproachPhase.d.ts'
import type { DragonLandingPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/DragonLandingPhase.d.ts'
import type { DragonPhaseInstance } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/DragonPhaseInstance.d.ts'
import type { DragonSittingAttackingPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/DragonSittingAttackingPhase.d.ts'
import type { DragonSittingFlamingPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/DragonSittingFlamingPhase.d.ts'
import type { DragonSittingScanningPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/DragonSittingScanningPhase.d.ts'
import type { DragonStrafePlayerPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/DragonStrafePlayerPhase.d.ts'
import type { DragonTakeoffPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/DragonTakeoffPhase.d.ts'
export class EnderDragonPhase<T extends DragonPhaseInstance> extends Object {
    static CHARGING_PLAYER: EnderDragonPhase<DragonChargePlayerPhase>;
    static DYING: EnderDragonPhase<DragonDeathPhase>;
    static HOLDING_PATTERN: EnderDragonPhase<DragonHoldingPatternPhase>;
    static HOVERING: EnderDragonPhase<DragonHoverPhase>;
    static LANDING: EnderDragonPhase<DragonLandingPhase>;
    static LANDING_APPROACH: EnderDragonPhase<DragonLandingApproachPhase>;
    static SITTING_ATTACKING: EnderDragonPhase<DragonSittingAttackingPhase>;
    static SITTING_FLAMING: EnderDragonPhase<DragonSittingFlamingPhase>;
    static SITTING_SCANNING: EnderDragonPhase<DragonSittingScanningPhase>;
    static STRAFE_PLAYER: EnderDragonPhase<DragonStrafePlayerPhase>;
    static TAKEOFF: EnderDragonPhase<DragonTakeoffPhase>;
    static getById(paramid: number): EnderDragonPhase<Object>;
    static getCount(): number;
    private constructor(id: number, instanceClass: Class<DragonPhaseInstance>, name: string)
    readonly id: number;
    // private instanceClass: Class<DragonPhaseInstance>;
    // private name: string;
    createInstance(dragon: EnderDragon): DragonPhaseInstance;
    getConstructor(): Constructor<DragonPhaseInstance>;
    getId(): number;
    toString(): string;
}