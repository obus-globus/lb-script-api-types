import type { RealmsServer$Compatibility } from '../../../../com/mojang/realmsclient/dto/RealmsServer$Compatibility.d.ts'
import type { RealmsWorldOptions } from '../../../../com/mojang/realmsclient/dto/RealmsWorldOptions.d.ts'
import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsSlotUpdateDto extends Record implements ReflectionBasedSerialization {
    constructor(slotId: number, options: RealmsWorldOptions, hardcore: boolean)
    constructor(slotId: number, spawnProtection: number, forceGameMode: boolean, difficulty: number, gameMode: number, slotName: string, version: string, compatibility: RealmsServer$Compatibility, templateId: number, templateImage: string, hardcore: boolean)
    // private compatibility: RealmsServer$Compatibility;
    // private difficulty: number;
    // private forceGameMode: boolean;
    // private gameMode: number;
    // private hardcore: boolean;
    // private slotId: number;
    // private slotName: string;
    // private spawnProtection: number;
    // private templateId: number;
    // private templateImage: string;
    // private version: string;
    compatibility(): RealmsServer$Compatibility;
    difficulty(): number;
    equals(o: Object | null): boolean;
    forceGameMode(): boolean;
    gameMode(): number;
    hardcore(): boolean;
    hashCode(): number;
    slotId(): number;
    slotName(): string;
    spawnProtection(): number;
    templateId(): number;
    templateImage(): string;
    toString(): string;
    version(): string;
}