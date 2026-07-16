import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CreateWorldScreen } from '../../../../../../net/minecraft/client/gui/screens/worldselection/CreateWorldScreen.d.ts'
import type { LayeredRegistryAccess } from '../../../../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { RegistryLayer } from '../../../../../../net/minecraft/server/RegistryLayer.d.ts'
import type { GameRules } from '../../../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
import type { LevelDataAndDimensions$WorldDataAndGenSettings } from '../../../../../../net/minecraft/world/level/storage/LevelDataAndDimensions$WorldDataAndGenSettings.d.ts'
export interface CreateWorldCallback extends Object{
    create(createWorldScreen: CreateWorldScreen, finalLayers: LayeredRegistryAccess<RegistryLayer>, worldDataAndGenSettings: LevelDataAndDimensions$WorldDataAndGenSettings, gameRules: Optional<GameRules>, tempDataPackDir: Path): boolean;
}