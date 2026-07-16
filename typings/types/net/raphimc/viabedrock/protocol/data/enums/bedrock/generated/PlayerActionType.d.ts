import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PlayerActionType extends Enum<PlayerActionType> {
    static AbortDestroyBlock: PlayerActionType;
    static ChangeDimensionAck: PlayerActionType;
    static ChangeSkin: PlayerActionType;
    static ClientAckServerData: PlayerActionType;
    static ContinueDestroyBlock: PlayerActionType;
    static CrackBlock: PlayerActionType;
    static CreativeDestroyBlock: PlayerActionType;
    static DenyDestroyBlock: PlayerActionType;
    static DropItem: PlayerActionType;
    static GetUpdatedBlock: PlayerActionType;
    static HandledTeleport: PlayerActionType;
    static InteractWithBlock: PlayerActionType;
    static MissedSwing: PlayerActionType;
    static PredictDestroyBlock: PlayerActionType;
    static Respawn: PlayerActionType;
    static StartCrawling: PlayerActionType;
    static StartDestroyBlock: PlayerActionType;
    static StartFlying: PlayerActionType;
    static StartGliding: PlayerActionType;
    static StartItemUseOn: PlayerActionType;
    static StartJump: PlayerActionType;
    static StartSleeping: PlayerActionType;
    static StartSneaking: PlayerActionType;
    static StartSpinAttack: PlayerActionType;
    static StartSprinting: PlayerActionType;
    static StartSwimming: PlayerActionType;
    static StartUsingItem: PlayerActionType;
    static StopCrawling: PlayerActionType;
    static StopDestroyBlock: PlayerActionType;
    static StopFlying: PlayerActionType;
    static StopGliding: PlayerActionType;
    static StopItemUseOn: PlayerActionType;
    static StopSleeping: PlayerActionType;
    static StopSneaking: PlayerActionType;
    static StopSpinAttack: PlayerActionType;
    static StopSprinting: PlayerActionType;
    static StopSwimming: PlayerActionType;
    static Unknown: PlayerActionType;
    static UpdatedEnchantingSeed: PlayerActionType;
    static getByName(paramarg0: string): PlayerActionType;
    static getByName(paramarg0: string, paramarg1: PlayerActionType): PlayerActionType;
    static getByValue(paramarg0: number): PlayerActionType;
    static getByValue(paramarg0: number, paramarg1: PlayerActionType): PlayerActionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PlayerActionType;
    static values(): PlayerActionType[];
    private constructor(arg2: number)
    private constructor(arg2: PlayerActionType)
    readonly value: number;
    getValue(): number;
    name(): "Unknown" | "StartDestroyBlock" | "AbortDestroyBlock" | "StopDestroyBlock" | "GetUpdatedBlock" | "DropItem" | "StartSleeping" | "StopSleeping" | "Respawn" | "StartJump" | "StartSprinting" | "StopSprinting" | "StartSneaking" | "StopSneaking" | "CreativeDestroyBlock" | "ChangeDimensionAck" | "StartGliding" | "StopGliding" | "DenyDestroyBlock" | "CrackBlock" | "ChangeSkin" | "UpdatedEnchantingSeed" | "StartSwimming" | "StopSwimming" | "StartSpinAttack" | "StopSpinAttack" | "InteractWithBlock" | "PredictDestroyBlock" | "ContinueDestroyBlock" | "StartItemUseOn" | "StopItemUseOn" | "HandledTeleport" | "MissedSwing" | "StartCrawling" | "StopCrawling" | "StartFlying" | "StopFlying" | "ClientAckServerData" | "StartUsingItem";
}