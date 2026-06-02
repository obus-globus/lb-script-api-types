import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { CreateWorldScreen } from '../../../../../../net/minecraft/client/gui/screens/worldselection/CreateWorldScreen.d.ts'
import type { WorldCreationContext } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldCreationContext.d.ts'
export interface PresetEditor extends Object{
    createEditScreen(parent: CreateWorldScreen, settings: WorldCreationContext): Screen;
}