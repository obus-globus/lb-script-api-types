import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class Toast$Visibility extends Enum<Toast$Visibility> {
    static HIDE: Toast$Visibility;
    static SHOW: Toast$Visibility;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Toast$Visibility;
    static values(): (Object | null)[];
    private constructor(soundEvent: SoundEvent)
    // private soundEvent: SoundEvent;
    playSound(manager: SoundManager): void;
    name(): "SHOW" | "HIDE";
}