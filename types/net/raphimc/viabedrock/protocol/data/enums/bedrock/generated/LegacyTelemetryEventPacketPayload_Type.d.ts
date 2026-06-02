import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class LegacyTelemetryEventPacketPayload_Type extends Enum<LegacyTelemetryEventPacketPayload_Type> {
    static Achievement: LegacyTelemetryEventPacketPayload_Type;
    static ActorDefinition: LegacyTelemetryEventPacketPayload_Type;
    static AgentCommand_OBSOLETE: LegacyTelemetryEventPacketPayload_Type;
    static AgentCreated: LegacyTelemetryEventPacketPayload_Type;
    static BellUsed: LegacyTelemetryEventPacketPayload_Type;
    static BossKilled: LegacyTelemetryEventPacketPayload_Type;
    static CarefulRestoration: LegacyTelemetryEventPacketPayload_Type;
    static CauldronUsed: LegacyTelemetryEventPacketPayload_Type;
    static CodeBuilderRuntimeAction: LegacyTelemetryEventPacketPayload_Type;
    static CodeBuilderScoreboard: LegacyTelemetryEventPacketPayload_Type;
    static ComposterUsed: LegacyTelemetryEventPacketPayload_Type;
    static FishBucketed_OBSOLETE: LegacyTelemetryEventPacketPayload_Type;
    static HoneyHarvested: LegacyTelemetryEventPacketPayload_Type;
    static Interaction: LegacyTelemetryEventPacketPayload_Type;
    static ItemUsed: LegacyTelemetryEventPacketPayload_Type;
    static MobBorn: LegacyTelemetryEventPacketPayload_Type;
    static MobKilled: LegacyTelemetryEventPacketPayload_Type;
    static POICauldronUsed: LegacyTelemetryEventPacketPayload_Type;
    static PatternRemoved_OBSOLETE: LegacyTelemetryEventPacketPayload_Type;
    static PetDied_OBSOLETE: LegacyTelemetryEventPacketPayload_Type;
    static PiglinBarter: LegacyTelemetryEventPacketPayload_Type;
    static PlayerDied: LegacyTelemetryEventPacketPayload_Type;
    static PlayerMovementAnomaly_OBSOLETE: LegacyTelemetryEventPacketPayload_Type;
    static PlayerMovementCorrected_OBSOLETE: LegacyTelemetryEventPacketPayload_Type;
    static PlayerWaxedOrUnwaxedCopper: LegacyTelemetryEventPacketPayload_Type;
    static PortalCreated: LegacyTelemetryEventPacketPayload_Type;
    static PortalUsed: LegacyTelemetryEventPacketPayload_Type;
    static RaidUpdate: LegacyTelemetryEventPacketPayload_Type;
    static SlashCommand: LegacyTelemetryEventPacketPayload_Type;
    static SneakCloseToSculkSensor: LegacyTelemetryEventPacketPayload_Type;
    static StriderRiddenInLavaInOverworld: LegacyTelemetryEventPacketPayload_Type;
    static TargetBlockHit: LegacyTelemetryEventPacketPayload_Type;
    static getByName(paramarg0: string): LegacyTelemetryEventPacketPayload_Type;
    static getByName(paramarg0: string, paramarg1: LegacyTelemetryEventPacketPayload_Type): LegacyTelemetryEventPacketPayload_Type;
    static getByValue(paramarg0: number): LegacyTelemetryEventPacketPayload_Type;
    static getByValue(paramarg0: number, paramarg1: LegacyTelemetryEventPacketPayload_Type): LegacyTelemetryEventPacketPayload_Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LegacyTelemetryEventPacketPayload_Type;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: LegacyTelemetryEventPacketPayload_Type)
    readonly value: number;
    getValue(): number;
    name(): "Achievement" | "Interaction" | "PortalCreated" | "PortalUsed" | "MobKilled" | "CauldronUsed" | "PlayerDied" | "BossKilled" | "AgentCommand_OBSOLETE" | "AgentCreated" | "PatternRemoved_OBSOLETE" | "SlashCommand" | "FishBucketed_OBSOLETE" | "MobBorn" | "PetDied_OBSOLETE" | "POICauldronUsed" | "ComposterUsed" | "BellUsed" | "ActorDefinition" | "RaidUpdate" | "PlayerMovementAnomaly_OBSOLETE" | "PlayerMovementCorrected_OBSOLETE" | "HoneyHarvested" | "TargetBlockHit" | "PiglinBarter" | "PlayerWaxedOrUnwaxedCopper" | "CodeBuilderRuntimeAction" | "CodeBuilderScoreboard" | "StriderRiddenInLavaInOverworld" | "SneakCloseToSculkSensor" | "CarefulRestoration" | "ItemUsed";
}