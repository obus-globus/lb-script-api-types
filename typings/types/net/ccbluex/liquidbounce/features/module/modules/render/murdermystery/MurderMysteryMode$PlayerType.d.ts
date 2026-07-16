import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class MurderMysteryMode$PlayerType extends Enum<MurderMysteryMode$PlayerType> {
    static DETECTIVE_LIKE: MurderMysteryMode$PlayerType;
    static MURDERER: MurderMysteryMode$PlayerType;
    static NEUTRAL: MurderMysteryMode$PlayerType;
    static getEntries(): MurderMysteryMode$PlayerType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): MurderMysteryMode$PlayerType;
    static values(): MurderMysteryMode$PlayerType[];
    private constructor(prefix: Component | null)
    readonly prefix: Component | null;
    name(): "NEUTRAL" | "DETECTIVE_LIKE" | "MURDERER";
}