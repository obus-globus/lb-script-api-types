import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CurrentCmdVersion extends Enum<CurrentCmdVersion> {
    static AgentSweepingBlockTest: CurrentCmdVersion;
    static BlockStateEquals: CurrentCmdVersion;
    static ChangesToCommandOriginRotation: CurrentCmdVersion;
    static ClearSpawnPointCommand: CurrentCmdVersion;
    static CloneAndTeleportRotationFixes: CurrentCmdVersion;
    static CloneContainerBlockEntityRemovalFix: CurrentCmdVersion;
    static CloneFixes: CurrentCmdVersion;
    static CloneIntersectFix: CurrentCmdVersion;
    static CloneUpdateBlockAndTimeFixes: CurrentCmdVersion;
    static CommandPositionFix: CurrentCmdVersion;
    static CommandSelectorHasItemFilterNoLongerCallsSameItemFunction: CurrentCmdVersion;
    static CommandSelectorHasItemFilterUsesDataAsDamageForSelectingDamageableItems: CurrentCmdVersion;
    static ContainersDontDropItemsAnymore: CurrentCmdVersion;
    static DontRegisterBrokenFunctionCommands: CurrentCmdVersion;
    static EnableSummonRotation: CurrentCmdVersion;
    static EntitySelectorUsesVec3: CurrentCmdVersion;
    static ExecuteAndBlockCommandAndSelfSelectorFixes: CurrentCmdVersion;
    static ExecuteDetectConditionSubcommandNotAllowNonLoadedBlocks: CurrentCmdVersion;
    static ExecuteIfScoreFixes: CurrentCmdVersion;
    static ExecuteUsesVec3: CurrentCmdVersion;
    static FiltersObeyDimensions: CurrentCmdVersion;
    static FunctionExecuteOrderAndChestSlotFix: CurrentCmdVersion;
    static Initial: CurrentCmdVersion;
    static InstantEffectsUseTicks: CurrentCmdVersion;
    static Invalid: CurrentCmdVersion;
    static Latest: CurrentCmdVersion;
    static LocateStructureOutput: CurrentCmdVersion;
    static NewBedrockCmdSystem: CurrentCmdVersion;
    static NewExecuteCommandReleaseEnchantCommandLevelFixAndHasItemDataFixAndCommandDeferral: CurrentCmdVersion;
    static NewExecuteCommandSyntaxExperimentAndChestLootTableFixAndTeleportFacingVerticalUnclampedAndLocateBiomeAndFeatureMerged: CurrentCmdVersion;
    static NewSummonCommandAddedRotationOptionsAndBubbleColumnCloneFixAndExecuteInDimensionTeleportFixAndNewExecuteRotationFix: CurrentCmdVersion;
    static NonTickingAreasNoLongerConsideredLoaded: CurrentCmdVersion;
    static PositionalDimensionFiltering: CurrentCmdVersion;
    static PostBlockFlattening: CurrentCmdVersion;
    static RemoveAuxValueParameterFromBlockCommands: CurrentCmdVersion;
    static RemoveSuicideKeyword: CurrentCmdVersion;
    static ReplaceItemAndLootReplaceBlockCommandsDoNotPlaceItemsIntoCauldronsFix: CurrentCmdVersion;
    static SelectorDistanceFilteredAndRelativeRotationFix: CurrentCmdVersion;
    static SpreadPlayersStuckInGroundFixAndMaxHeightParameter: CurrentCmdVersion;
    static SpreadplayersHazardAndResolvePlayerByNameFix: CurrentCmdVersion;
    static StopSoundMusicFix: CurrentCmdVersion;
    static SummonCommandDefaultRotation: CurrentCmdVersion;
    static TeleportDimensionFixes: CurrentCmdVersion;
    static TestForBlockCommandDoesNotIgnoreBlockState: CurrentCmdVersion;
    static TpRotationClamping: CurrentCmdVersion;
    static UpdateAquatic: CurrentCmdVersion;
    static VolumeSelectorFixes: CurrentCmdVersion;
    static WaterloggingAddedToStructureCommand: CurrentCmdVersion;
    static getByName(paramarg0: string): CurrentCmdVersion;
    static getByName(paramarg0: string, paramarg1: CurrentCmdVersion): CurrentCmdVersion;
    static getByValue(paramarg0: number): CurrentCmdVersion;
    static getByValue(paramarg0: number, paramarg1: CurrentCmdVersion): CurrentCmdVersion;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CurrentCmdVersion;
    static values(): CurrentCmdVersion[];
    private constructor(arg2: number)
    private constructor(arg2: CurrentCmdVersion)
    readonly value: number;
    getValue(): number;
    name(): "Invalid" | "Initial" | "TpRotationClamping" | "NewBedrockCmdSystem" | "ExecuteUsesVec3" | "CloneFixes" | "UpdateAquatic" | "EntitySelectorUsesVec3" | "ContainersDontDropItemsAnymore" | "FiltersObeyDimensions" | "ExecuteAndBlockCommandAndSelfSelectorFixes" | "InstantEffectsUseTicks" | "DontRegisterBrokenFunctionCommands" | "ClearSpawnPointCommand" | "CloneAndTeleportRotationFixes" | "TeleportDimensionFixes" | "CloneUpdateBlockAndTimeFixes" | "CloneIntersectFix" | "FunctionExecuteOrderAndChestSlotFix" | "NonTickingAreasNoLongerConsideredLoaded" | "SpreadplayersHazardAndResolvePlayerByNameFix" | "NewExecuteCommandSyntaxExperimentAndChestLootTableFixAndTeleportFacingVerticalUnclampedAndLocateBiomeAndFeatureMerged" | "WaterloggingAddedToStructureCommand" | "SelectorDistanceFilteredAndRelativeRotationFix" | "NewSummonCommandAddedRotationOptionsAndBubbleColumnCloneFixAndExecuteInDimensionTeleportFixAndNewExecuteRotationFix" | "NewExecuteCommandReleaseEnchantCommandLevelFixAndHasItemDataFixAndCommandDeferral" | "ExecuteIfScoreFixes" | "ReplaceItemAndLootReplaceBlockCommandsDoNotPlaceItemsIntoCauldronsFix" | "ChangesToCommandOriginRotation" | "RemoveAuxValueParameterFromBlockCommands" | "VolumeSelectorFixes" | "EnableSummonRotation" | "SummonCommandDefaultRotation" | "PositionalDimensionFiltering" | "CommandSelectorHasItemFilterNoLongerCallsSameItemFunction" | "AgentSweepingBlockTest" | "BlockStateEquals" | "CommandPositionFix" | "CommandSelectorHasItemFilterUsesDataAsDamageForSelectingDamageableItems" | "ExecuteDetectConditionSubcommandNotAllowNonLoadedBlocks" | "RemoveSuicideKeyword" | "CloneContainerBlockEntityRemovalFix" | "StopSoundMusicFix" | "SpreadPlayersStuckInGroundFixAndMaxHeightParameter" | "LocateStructureOutput" | "PostBlockFlattening" | "TestForBlockCommandDoesNotIgnoreBlockState" | "Latest";
}