import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ActorDamageCause extends Enum<ActorDamageCause> {
    static Anvil: ActorDamageCause;
    static BlockExplosion: ActorDamageCause;
    static Campfire: ActorDamageCause;
    static Charging: ActorDamageCause;
    static Contact: ActorDamageCause;
    static Drowning: ActorDamageCause;
    static EntityAttack: ActorDamageCause;
    static EntityExplosion: ActorDamageCause;
    static Fall: ActorDamageCause;
    static FallingBlock: ActorDamageCause;
    static Fire: ActorDamageCause;
    static FireTick: ActorDamageCause;
    static Fireworks: ActorDamageCause;
    static FlyIntoWall: ActorDamageCause;
    static Freezing: ActorDamageCause;
    static Lava: ActorDamageCause;
    static Lightning: ActorDamageCause;
    static Magic: ActorDamageCause;
    static Magma: ActorDamageCause;
    static None: ActorDamageCause;
    static Override: ActorDamageCause;
    static Piston: ActorDamageCause;
    static Projectile: ActorDamageCause;
    static RamAttack: ActorDamageCause;
    static SelfDestruct: ActorDamageCause;
    static SonicBoom: ActorDamageCause;
    static SoulCampfire: ActorDamageCause;
    static Stalactite: ActorDamageCause;
    static Stalagmite: ActorDamageCause;
    static Starve: ActorDamageCause;
    static Suffocation: ActorDamageCause;
    static Temperature: ActorDamageCause;
    static Thorns: ActorDamageCause;
    static Void: ActorDamageCause;
    static Wither: ActorDamageCause;
    static getByName(paramarg0: string): ActorDamageCause;
    static getByName(paramarg0: string, paramarg1: ActorDamageCause): ActorDamageCause;
    static getByValue(paramarg0: number): ActorDamageCause;
    static getByValue(paramarg0: number, paramarg1: ActorDamageCause): ActorDamageCause;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ActorDamageCause;
    static values(): ActorDamageCause[];
    private constructor(arg2: number)
    private constructor(arg2: ActorDamageCause)
    readonly value: number;
    getValue(): number;
    name(): "None" | "Override" | "Contact" | "EntityAttack" | "Projectile" | "Suffocation" | "Fall" | "Fire" | "FireTick" | "Lava" | "Drowning" | "BlockExplosion" | "EntityExplosion" | "Void" | "SelfDestruct" | "Magic" | "Wither" | "Starve" | "Anvil" | "Thorns" | "FallingBlock" | "Piston" | "FlyIntoWall" | "Magma" | "Fireworks" | "Lightning" | "Charging" | "Temperature" | "Freezing" | "Stalactite" | "Stalagmite" | "RamAttack" | "SonicBoom" | "Campfire" | "SoulCampfire";
}