import type { DisplayData } from '../../../../com/mojang/blaze3d/platform/DisplayData.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameConfig$FolderData } from '../../../../net/minecraft/client/main/GameConfig$FolderData.d.ts'
import type { GameConfig$GameData } from '../../../../net/minecraft/client/main/GameConfig$GameData.d.ts'
import type { GameConfig$QuickPlayData } from '../../../../net/minecraft/client/main/GameConfig$QuickPlayData.d.ts'
import type { GameConfig$UserData } from '../../../../net/minecraft/client/main/GameConfig$UserData.d.ts'
export class GameConfig extends Object {
    constructor(userData: GameConfig$UserData, displayData: DisplayData, folderData: GameConfig$FolderData, gameData: GameConfig$GameData, quickPlayData: GameConfig$QuickPlayData)
    display: DisplayData;
    game: GameConfig$GameData;
    location: GameConfig$FolderData;
    quickPlay: GameConfig$QuickPlayData;
    user: GameConfig$UserData;
}