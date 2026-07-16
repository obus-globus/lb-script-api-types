import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsServer$WorldType extends Enum<RealmsServer$WorldType> {
    static ADVENTUREMAP: RealmsServer$WorldType;
    static EXPERIENCE: RealmsServer$WorldType;
    static INSPIRATION: RealmsServer$WorldType;
    static MINIGAME: RealmsServer$WorldType;
    static NORMAL: RealmsServer$WorldType;
    static UNKNOWN: RealmsServer$WorldType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RealmsServer$WorldType;
    static values(): RealmsServer$WorldType[];
    private constructor(translationKey: string)
    readonly displayName: Component;
    getDisplayName(): Component;
    name(): "NORMAL" | "MINIGAME" | "ADVENTUREMAP" | "EXPERIENCE" | "INSPIRATION" | "UNKNOWN";
}