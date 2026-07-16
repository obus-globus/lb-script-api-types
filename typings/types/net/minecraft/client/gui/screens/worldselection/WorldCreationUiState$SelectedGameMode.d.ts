import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { GameType } from '../../../../../../net/minecraft/world/level/GameType.d.ts'
export class WorldCreationUiState$SelectedGameMode extends Enum<WorldCreationUiState$SelectedGameMode> {
    static CREATIVE: WorldCreationUiState$SelectedGameMode;
    static DEBUG: WorldCreationUiState$SelectedGameMode;
    static HARDCORE: WorldCreationUiState$SelectedGameMode;
    static SURVIVAL: WorldCreationUiState$SelectedGameMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): WorldCreationUiState$SelectedGameMode;
    static values(): WorldCreationUiState$SelectedGameMode[];
    private constructor(name: string, gameType: GameType)
    displayName: Component;
    gameType: GameType;
    readonly info: Component;
    getInfo(): Component;
    name(): "SURVIVAL" | "HARDCORE" | "CREATIVE" | "DEBUG";
}