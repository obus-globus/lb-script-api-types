import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { HitFXRegistry$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/hitfx/HitFXRegistry$Companion.d.ts'
import type { SoundEvent } from '../../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class HitFXRegistry extends Enum<HitFXRegistry> implements Tagged {
    static BONK: HitFXRegistry;
    static BOYKISSER: HitFXRegistry;
    static BRING: HitFXRegistry;
    static CLICK: HitFXRegistry;
    static Companion: HitFXRegistry$Companion;
    static GLASS: HitFXRegistry;
    static HIT: HitFXRegistry;
    static MAGIC_SQUASH: HitFXRegistry;
    static MEOW: HitFXRegistry;
    static MOAN: HitFXRegistry;
    static NYA: HitFXRegistry;
    static ORB: HitFXRegistry;
    static POP: HitFXRegistry;
    static SOFT: HitFXRegistry;
    static SQUASH: HitFXRegistry;
    static TUNG: HitFXRegistry;
    static UWU: HitFXRegistry;
    static getEntries(): HitFXRegistry[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static registerAll(): void;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): HitFXRegistry;
    static values(): HitFXRegistry[];
    private constructor(tag: string, vanillaSounds: SoundEvent[], customSoundIds: string[])
    // private customSoundIds: string[];
    readonly sounds: SoundEvent[];
    readonly tag: string;
    // private vanillaSounds: SoundEvent[];
    name(): "HIT" | "ORB" | "BONK" | "BOYKISSER" | "BRING" | "GLASS" | "CLICK" | "MEOW" | "MOAN" | "MAGIC_SQUASH" | "NYA" | "POP" | "SOFT" | "SQUASH" | "TUNG" | "UWU";
}