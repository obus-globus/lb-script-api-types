import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { OptionalLong } from '../../../../../../java/util/OptionalLong.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PresetEditor } from '../../../../../../net/minecraft/client/gui/screens/worldselection/PresetEditor.d.ts'
import type { WorldCreationContext } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldCreationContext.d.ts'
import type { WorldCreationContext$DimensionsUpdater } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldCreationContext$DimensionsUpdater.d.ts'
import type { WorldCreationUiState$SelectedGameMode } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldCreationUiState$SelectedGameMode.d.ts'
import type { WorldCreationUiState$WorldTypeEntry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldCreationUiState$WorldTypeEntry.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Difficulty } from '../../../../../../net/minecraft/world/Difficulty.d.ts'
import type { WorldDataConfiguration } from '../../../../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
import type { GameRules } from '../../../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
import type { WorldPreset } from '../../../../../../net/minecraft/world/level/levelgen/presets/WorldPreset.d.ts'
export class WorldCreationUiState extends Object {
    constructor(savesFolder: Path[], settings: WorldCreationContext, preset: Optional<ResourceKey<WorldPreset>>, seed: OptionalLong)
    readonly allowCommands: boolean;
    readonly altPresetList: WorldCreationUiState$WorldTypeEntry[];
    readonly bonusChest: boolean;
    readonly difficulty: Difficulty;
    readonly gameMode: WorldCreationUiState$SelectedGameMode;
    readonly gameRules: GameRules;
    readonly generateStructures: boolean;
    // private listeners: (param0: WorldCreationUiState) => void[];
    readonly name: string;
    readonly normalPresetList: WorldCreationUiState$WorldTypeEntry[];
    // private savesFolder: Path[];
    readonly seed: string;
    readonly settings: WorldCreationContext;
    readonly targetFolder: string;
    readonly worldType: WorldCreationUiState$WorldTypeEntry;
    addListener(action: (param0: WorldCreationUiState) => void): void;
    // private findResultFolder(name: string): string;
    getAltPresetList(): WorldCreationUiState$WorldTypeEntry[];
    getDifficulty(): Difficulty;
    getGameMode(): WorldCreationUiState$SelectedGameMode;
    getGameRules(): GameRules;
    getName(): string;
    getNormalPresetList(): WorldCreationUiState$WorldTypeEntry[];
    getPresetEditor(): PresetEditor;
    getSeed(): string;
    getSettings(): WorldCreationContext;
    getTargetFolder(): string;
    getWorldType(): WorldCreationUiState$WorldTypeEntry;
    isAllowCommands(): boolean;
    isBonusChest(): boolean;
    isDebug(): boolean;
    isGenerateStructures(): boolean;
    isHardcore(): boolean;
    onChanged(): void;
    setAllowCommands(allowCommands: boolean): void;
    setBonusChest(bonusChest: boolean): void;
    setDifficulty(difficulty: Difficulty): void;
    setGameMode(gameMode: WorldCreationUiState$SelectedGameMode): void;
    setGameRules(gameRules: GameRules): void;
    setGenerateStructures(generateStructures: boolean): void;
    setName(name: string): void;
    setSeed(seed: string): void;
    setSettings(settings: WorldCreationContext): void;
    setWorldType(worldType: WorldCreationUiState$WorldTypeEntry): void;
    tryUpdateDataConfiguration(newConfig: WorldDataConfiguration): boolean;
    updateDimensions(modifier: (param0: Object | null, param1: Object | null) => Object | null): void;
    // private updatePresetLists(): void;
}