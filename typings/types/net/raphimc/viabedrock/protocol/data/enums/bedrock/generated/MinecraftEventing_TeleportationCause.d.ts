import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class MinecraftEventing_TeleportationCause extends Enum<MinecraftEventing_TeleportationCause> {
    static Behavior: MinecraftEventing_TeleportationCause;
    static ChorusFruit: MinecraftEventing_TeleportationCause;
    static Command: MinecraftEventing_TeleportationCause;
    static Projectile: MinecraftEventing_TeleportationCause;
    static TeleportationCause_Count: MinecraftEventing_TeleportationCause;
    static Unknown: MinecraftEventing_TeleportationCause;
    static getByName(paramarg0: string): MinecraftEventing_TeleportationCause;
    static getByName(paramarg0: string, paramarg1: MinecraftEventing_TeleportationCause): MinecraftEventing_TeleportationCause;
    static getByValue(paramarg0: number): MinecraftEventing_TeleportationCause;
    static getByValue(paramarg0: number, paramarg1: MinecraftEventing_TeleportationCause): MinecraftEventing_TeleportationCause;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MinecraftEventing_TeleportationCause;
    static values(): MinecraftEventing_TeleportationCause[];
    private constructor(arg2: number)
    private constructor(arg2: MinecraftEventing_TeleportationCause)
    readonly value: number;
    getValue(): number;
    name(): "Unknown" | "Projectile" | "ChorusFruit" | "Command" | "Behavior" | "TeleportationCause_Count";
}