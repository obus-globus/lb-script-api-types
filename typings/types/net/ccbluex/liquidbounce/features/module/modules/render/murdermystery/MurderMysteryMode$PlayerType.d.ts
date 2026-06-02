import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class MurderMysteryMode$PlayerType extends Enum<MurderMysteryMode$PlayerType> {
    static DETECTIVE_LIKE: MurderMysteryMode$PlayerType;
    static MURDERER: MurderMysteryMode$PlayerType;
    static NEUTRAL: MurderMysteryMode$PlayerType;
    static getEntries(): MurderMysteryMode$PlayerType[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MurderMysteryMode$PlayerType;
    static values(): (Object | null)[];
    private constructor(prefix: Component | null)
    readonly prefix: Component | null;
    name(): "NEUTRAL" | "DETECTIVE_LIKE" | "MURDERER";
}