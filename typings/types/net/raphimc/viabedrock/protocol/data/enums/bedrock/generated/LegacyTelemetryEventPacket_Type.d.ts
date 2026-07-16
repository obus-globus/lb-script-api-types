import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class LegacyTelemetryEventPacket_Type extends Enum<LegacyTelemetryEventPacket_Type> {
    static Achievement: LegacyTelemetryEventPacket_Type;
    static ActorDefinition: LegacyTelemetryEventPacket_Type;
    static AgentCommand_OBSOLETE: LegacyTelemetryEventPacket_Type;
    static AgentCreated: LegacyTelemetryEventPacket_Type;
    static BellUsed: LegacyTelemetryEventPacket_Type;
    static BossKilled: LegacyTelemetryEventPacket_Type;
    static CarefulRestoration: LegacyTelemetryEventPacket_Type;
    static CauldronUsed: LegacyTelemetryEventPacket_Type;
    static CodeBuilderRuntimeAction: LegacyTelemetryEventPacket_Type;
    static CodeBuilderScoreboard: LegacyTelemetryEventPacket_Type;
    static ComposterUsed: LegacyTelemetryEventPacket_Type;
    static Deprecated_FishBucketed: LegacyTelemetryEventPacket_Type;
    static HoneyHarvested: LegacyTelemetryEventPacket_Type;
    static Interaction: LegacyTelemetryEventPacket_Type;
    static ItemUsedEvent: LegacyTelemetryEventPacket_Type;
    static MobBorn: LegacyTelemetryEventPacket_Type;
    static MobKilled: LegacyTelemetryEventPacket_Type;
    static POICauldronUsed: LegacyTelemetryEventPacket_Type;
    static PatternRemoved_OBSOLETE: LegacyTelemetryEventPacket_Type;
    static PetDied_OBSOLETE: LegacyTelemetryEventPacket_Type;
    static PiglinBarter: LegacyTelemetryEventPacket_Type;
    static PlayerDied: LegacyTelemetryEventPacket_Type;
    static PlayerMovementAnomaly_OBSOLETE: LegacyTelemetryEventPacket_Type;
    static PlayerMovementCorrected_OBSOLETE: LegacyTelemetryEventPacket_Type;
    static PlayerWaxedOrUnwaxedCopper: LegacyTelemetryEventPacket_Type;
    static PortalCreated: LegacyTelemetryEventPacket_Type;
    static PortalUsed: LegacyTelemetryEventPacket_Type;
    static RaidUpdate: LegacyTelemetryEventPacket_Type;
    static SlashCommand: LegacyTelemetryEventPacket_Type;
    static SneakCloseToSculkSensor: LegacyTelemetryEventPacket_Type;
    static StriderRiddenInLavaInOverworld: LegacyTelemetryEventPacket_Type;
    static TargetBlockHit: LegacyTelemetryEventPacket_Type;
    static getByName(paramarg0: string): LegacyTelemetryEventPacket_Type;
    static getByName(paramarg0: string, paramarg1: LegacyTelemetryEventPacket_Type): LegacyTelemetryEventPacket_Type;
    static getByValue(paramarg0: number): LegacyTelemetryEventPacket_Type;
    static getByValue(paramarg0: number, paramarg1: LegacyTelemetryEventPacket_Type): LegacyTelemetryEventPacket_Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LegacyTelemetryEventPacket_Type;
    static values(): LegacyTelemetryEventPacket_Type[];
    private constructor(arg2: number)
    private constructor(arg2: LegacyTelemetryEventPacket_Type)
    readonly value: number;
    getValue(): number;
    name(): "Achievement" | "Interaction" | "PortalCreated" | "PortalUsed" | "MobKilled" | "CauldronUsed" | "PlayerDied" | "BossKilled" | "AgentCommand_OBSOLETE" | "AgentCreated" | "PatternRemoved_OBSOLETE" | "SlashCommand" | "Deprecated_FishBucketed" | "MobBorn" | "PetDied_OBSOLETE" | "POICauldronUsed" | "ComposterUsed" | "BellUsed" | "ActorDefinition" | "RaidUpdate" | "PlayerMovementAnomaly_OBSOLETE" | "PlayerMovementCorrected_OBSOLETE" | "HoneyHarvested" | "TargetBlockHit" | "PiglinBarter" | "PlayerWaxedOrUnwaxedCopper" | "CodeBuilderRuntimeAction" | "CodeBuilderScoreboard" | "StriderRiddenInLavaInOverworld" | "SneakCloseToSculkSensor" | "CarefulRestoration" | "ItemUsedEvent";
}