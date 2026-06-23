import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
import type { LevelSettings } from '../../../../../net/minecraft/world/level/LevelSettings.d.ts'
import type { LevelSummary$BackupStatus } from '../../../../../net/minecraft/world/level/storage/LevelSummary$BackupStatus.d.ts'
import type { LevelVersion } from '../../../../../net/minecraft/world/level/storage/LevelVersion.d.ts'
export class LevelSummary extends Object implements Comparable<LevelSummary> {
    static PLAY_WORLD: Component;
    static UPGRADE_AND_PLAY_WORLD: Component;
    constructor(settings: LevelSettings, levelVersion: LevelVersion, levelId: string, requiresManualConversion: boolean, requiresFileFixing: boolean, locked: boolean, experimental: boolean, icon: Path[])
    readonly experimental: boolean;
    readonly icon: Path[];
    readonly info: Component;
    readonly levelId: string;
    // private levelVersion: LevelVersion;
    readonly locked: boolean;
    // private requiresFileFixing: boolean;
    // private requiresManualConversion: boolean;
    readonly settings: LevelSettings;
    backupStatus(): LevelSummary$BackupStatus;
    canDelete(): boolean;
    canEdit(): boolean;
    canRecreate(): boolean;
    canUpload(): boolean;
    compareTo(rhs: LevelSummary): number;
    // private createInfo(): Component;
    getGameMode(): GameType;
    getIcon(): Path[];
    getInfo(): Component;
    getLastPlayed(): number;
    getLevelId(): string;
    getLevelName(): string;
    getSettings(): LevelSettings;
    getWorldVersionName(): MutableComponent;
    hasCommands(): boolean;
    isCompatible(): boolean;
    isDisabled(): boolean;
    isDowngrade(): boolean;
    isExperimental(): boolean;
    isHardcore(): boolean;
    isLocked(): boolean;
    levelVersion(): LevelVersion;
    primaryActionActive(): boolean;
    primaryActionMessage(): Component;
    requiresFileFixing(): boolean;
    requiresManualConversion(): boolean;
    shouldBackup(): boolean;
}