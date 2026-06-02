import type { GuardedSerializer } from '../../../../com/mojang/realmsclient/dto/GuardedSerializer.d.ts'
import type { RealmsServer$Compatibility } from '../../../../com/mojang/realmsclient/dto/RealmsServer$Compatibility.d.ts'
import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { ValueObject } from '../../../../com/mojang/realmsclient/dto/ValueObject.d.ts'
import type { Difficulty } from '../../../../net/minecraft/world/Difficulty.d.ts'
import type { GameType } from '../../../../net/minecraft/world/level/GameType.d.ts'
import type { LevelSettings } from '../../../../net/minecraft/world/level/LevelSettings.d.ts'
export class RealmsWorldOptions extends ValueObject implements ReflectionBasedSerialization {
    static createDefaults(): RealmsWorldOptions;
    static createDefaultsWith(paramgameMode: GameType, paramdifficulty: Difficulty, paramhardcore: boolean, paramversion: string, paramworldName: string): RealmsWorldOptions;
    static createEmptyDefaults(): RealmsWorldOptions;
    static createFromSettings(paramsettings: LevelSettings, paramworldVersion: string): RealmsWorldOptions;
    static parse(paramgson: GuardedSerializer, paramjson: string): RealmsWorldOptions;
    private constructor()
    constructor(spawnProtection: number, difficulty: number, gameMode: number, forceGameMode: boolean, slotName: string, version: string, compatibility: RealmsServer$Compatibility)
    compatibility: RealmsServer$Compatibility;
    difficulty: number;
    empty: boolean;
    forceGameMode: boolean;
    gameMode: number;
    readonly slotName: string;
    spawnProtection: number;
    templateId: number;
    templateImage: string;
    version: string;
    copy(): RealmsWorldOptions;
    getDefaultSlotName(i: number): string;
    getSlotName(i: number): string;
    setEmpty(empty: boolean): void;
}