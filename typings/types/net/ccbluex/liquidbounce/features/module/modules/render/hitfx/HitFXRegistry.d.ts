import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { HitFXRegistry$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/hitfx/HitFXRegistry$Companion.d.ts'
import type { SoundEvent } from '../../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class HitFXRegistry extends Enum<HitFXRegistry> implements Tagged {
    static AIMBOOSTER: HitFXRegistry;
    static APPLEPAY: HitFXRegistry;
    static BONK: HitFXRegistry;
    static BOYKISSER: HitFXRegistry;
    static BRICK: HitFXRegistry;
    static BRING: HitFXRegistry;
    static BUMP: HitFXRegistry;
    static CLICK: HitFXRegistry;
    static COIN: HitFXRegistry;
    static Companion: HitFXRegistry$Companion;
    static GLASS: HitFXRegistry;
    static HIT: HitFXRegistry;
    static MAGIC_SQUASH: HitFXRegistry;
    static MEOW: HitFXRegistry;
    static MOAN: HitFXRegistry;
    static NYA: HitFXRegistry;
    static ORB: HitFXRegistry;
    static OSU: HitFXRegistry;
    static POP: HitFXRegistry;
    static SCHOOLBOY: HitFXRegistry;
    static SKEET: HitFXRegistry;
    static SLAP: HitFXRegistry;
    static SOFT: HitFXRegistry;
    static SQUASH: HitFXRegistry;
    static TF2CRIT: HitFXRegistry;
    static TUNG: HitFXRegistry;
    static UWU: HitFXRegistry;
    static getEntries(): HitFXRegistry[];
    static registerAll(): void;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): HitFXRegistry;
    static values(): HitFXRegistry[];
    private constructor(tag: string, vanillaSounds: SoundEvent[], customSoundIds: string[])
    // private customSoundIds: string[];
    readonly sounds: SoundEvent[];
    readonly tag: string;
    // private vanillaSounds: SoundEvent[];
    name(): "HIT" | "ORB" | "BONK" | "BOYKISSER" | "APPLEPAY" | "AIMBOOSTER" | "BRING" | "BRICK" | "BUMP" | "GLASS" | "CLICK" | "COIN" | "MEOW" | "MOAN" | "MAGIC_SQUASH" | "NYA" | "OSU" | "POP" | "SOFT" | "SCHOOLBOY" | "SKEET" | "SLAP" | "SQUASH" | "TUNG" | "TF2CRIT" | "UWU";
}