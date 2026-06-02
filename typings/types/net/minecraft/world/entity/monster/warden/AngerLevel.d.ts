import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class AngerLevel extends Enum<AngerLevel> {
    static AGITATED: AngerLevel;
    static ANGRY: AngerLevel;
    static CALM: AngerLevel;
    static byAnger(paramanger: number): AngerLevel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): AngerLevel;
    static values(): (Object | null)[];
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