import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class AngerLevel extends Enum<AngerLevel> {
    static AGITATED: AngerLevel;
    static ANGRY: AngerLevel;
    static CALM: AngerLevel;
    static byAnger(paramanger: number): AngerLevel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AngerLevel;
    static values(): AngerLevel[];
    private constructor(minimumAnger: number, ambientSound: SoundEvent, listeningSound: SoundEvent)
    readonly ambientSound: SoundEvent;
    readonly listeningSound: SoundEvent;
    readonly minimumAnger: number;
    getAmbientSound(): SoundEvent;
    getListeningSound(): SoundEvent;
    getMinimumAnger(): number;
    isAngry(): boolean;
    name(): "CALM" | "AGITATED" | "ANGRY";
}