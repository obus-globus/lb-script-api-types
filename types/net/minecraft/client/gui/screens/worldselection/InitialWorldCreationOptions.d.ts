import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { WorldCreationUiState$SelectedGameMode } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldCreationUiState$SelectedGameMode.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { GameRuleMap } from '../../../../../../net/minecraft/world/level/gamerules/GameRuleMap.d.ts'
import type { FlatLevelGeneratorPreset } from '../../../../../../net/minecraft/world/level/levelgen/flat/FlatLevelGeneratorPreset.d.ts'
export class InitialWorldCreationOptions extends Record {
    constructor(selectedGameMode: WorldCreationUiState$SelectedGameMode, gameRuleOverwrites: GameRuleMap, flatLevelPreset: ResourceKey<FlatLevelGeneratorPreset>)
    // private flatLevelPreset: ResourceKey<FlatLevelGeneratorPreset>;
    // private gameRuleOverwrites: GameRuleMap;
    // private selectedGameMode: WorldCreationUiState$SelectedGameMode;
    equals(o: Object | null): boolean;
    flatLevelPreset(): ResourceKey<FlatLevelGeneratorPreset>;
    gameRuleOverwrites(): GameRuleMap;
    hashCode(): number;
    selectedGameMode(): WorldCreationUiState$SelectedGameMode;
    toString(): string;
}