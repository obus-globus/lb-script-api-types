import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Enchant_Type extends Enum<Enchant_Type> {
    static AquaAffinity: Enchant_Type;
    static BaneOfArthropods: Enchant_Type;
    static BlastProtection: Enchant_Type;
    static Breach: Enchant_Type;
    static Channeling: Enchant_Type;
    static CurseOfBinding: Enchant_Type;
    static CurseOfVanishing: Enchant_Type;
    static Density: Enchant_Type;
    static DepthStrider: Enchant_Type;
    static Efficiency: Enchant_Type;
    static FeatherFalling: Enchant_Type;
    static FireAspect: Enchant_Type;
    static FireProtection: Enchant_Type;
    static Flame: Enchant_Type;
    static Fortune: Enchant_Type;
    static FrostWalker: Enchant_Type;
    static Impaling: Enchant_Type;
    static Infinity: Enchant_Type;
    static Knockback: Enchant_Type;
    static Looting: Enchant_Type;
    static Loyalty: Enchant_Type;
    static LuckOfTheSea: Enchant_Type;
    static Lunge: Enchant_Type;
    static Lure: Enchant_Type;
    static Mending: Enchant_Type;
    static Multishot: Enchant_Type;
    static Piercing: Enchant_Type;
    static Power: Enchant_Type;
    static ProjectileProtection: Enchant_Type;
    static Protection: Enchant_Type;
    static Punch: Enchant_Type;
    static QuickCharge: Enchant_Type;
    static Respiration: Enchant_Type;
    static Riptide: Enchant_Type;
    static Sharpness: Enchant_Type;
    static SilkTouch: Enchant_Type;
    static Smite: Enchant_Type;
    static SoulSpeed: Enchant_Type;
    static SwiftSneak: Enchant_Type;
    static Thorns: Enchant_Type;
    static Unbreaking: Enchant_Type;
    static WindBurst: Enchant_Type;
    static getByName(paramarg0: string): Enchant_Type;
    static getByName(paramarg0: string, paramarg1: Enchant_Type): Enchant_Type;
    static getByValue(paramarg0: number): Enchant_Type;
    static getByValue(paramarg0: number, paramarg1: Enchant_Type): Enchant_Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Enchant_Type;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: Enchant_Type)
    readonly value: number;
    getValue(): number;
    name(): "Protection" | "FireProtection" | "FeatherFalling" | "BlastProtection" | "ProjectileProtection" | "Thorns" | "Respiration" | "DepthStrider" | "AquaAffinity" | "Sharpness" | "Smite" | "BaneOfArthropods" | "Knockback" | "FireAspect" | "Looting" | "Efficiency" | "SilkTouch" | "Unbreaking" | "Fortune" | "Power" | "Punch" | "Flame" | "Infinity" | "LuckOfTheSea" | "Lure" | "FrostWalker" | "Mending" | "CurseOfBinding" | "CurseOfVanishing" | "Impaling" | "Riptide" | "Loyalty" | "Channeling" | "Multishot" | "Piercing" | "QuickCharge" | "SoulSpeed" | "SwiftSneak" | "WindBurst" | "Density" | "Breach" | "Lunge";
}