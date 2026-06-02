import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { LevelSummary } from '../../../../../net/minecraft/world/level/storage/LevelSummary.d.ts'
export class LevelSummary$SymlinkLevelSummary extends LevelSummary {
    static PLAY_WORLD: Component;
    static UPGRADE_AND_PLAY_WORLD: Component;
    constructor(levelId: string, icon: Path[])
    canEdit(): boolean;
    canRecreate(): boolean;
    canUpload(): boolean;
    getInfo(): Component;
    getLastPlayed(): number;
    getLevelName(): string;
    isDisabled(): boolean;
    primaryActionActive(): boolean;
    primaryActionMessage(): Component;
}