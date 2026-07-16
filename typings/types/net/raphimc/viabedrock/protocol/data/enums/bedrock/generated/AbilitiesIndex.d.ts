import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class AbilitiesIndex extends Enum<AbilitiesIndex> {
    static AttackMobs: AbilitiesIndex;
    static AttackPlayers: AbilitiesIndex;
    static Build: AbilitiesIndex;
    static DoorsAndSwitches: AbilitiesIndex;
    static FlySpeed: AbilitiesIndex;
    static Flying: AbilitiesIndex;
    static Instabuild: AbilitiesIndex;
    static Invalid: AbilitiesIndex;
    static Invulnerable: AbilitiesIndex;
    static Lightning: AbilitiesIndex;
    static MayFly: AbilitiesIndex;
    static Mine: AbilitiesIndex;
    static Muted: AbilitiesIndex;
    static NoClip: AbilitiesIndex;
    static OpenContainers: AbilitiesIndex;
    static OperatorCommands: AbilitiesIndex;
    static PrivilegedBuilder: AbilitiesIndex;
    static Teleport: AbilitiesIndex;
    static VerticalFlySpeed: AbilitiesIndex;
    static WalkSpeed: AbilitiesIndex;
    static WorldBuilder: AbilitiesIndex;
    static getByName(paramarg0: string): AbilitiesIndex;
    static getByName(paramarg0: string, paramarg1: AbilitiesIndex): AbilitiesIndex;
    static getByValue(paramarg0: number): AbilitiesIndex;
    static getByValue(paramarg0: number, paramarg1: AbilitiesIndex): AbilitiesIndex;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AbilitiesIndex;
    static values(): AbilitiesIndex[];
    private constructor(arg2: number)
    private constructor(arg2: AbilitiesIndex)
    readonly value: number;
    getValue(): number;
    name(): "Invalid" | "Build" | "Mine" | "DoorsAndSwitches" | "OpenContainers" | "AttackPlayers" | "AttackMobs" | "OperatorCommands" | "Teleport" | "Invulnerable" | "Flying" | "MayFly" | "Instabuild" | "Lightning" | "FlySpeed" | "WalkSpeed" | "Muted" | "WorldBuilder" | "NoClip" | "PrivilegedBuilder" | "VerticalFlySpeed";
}