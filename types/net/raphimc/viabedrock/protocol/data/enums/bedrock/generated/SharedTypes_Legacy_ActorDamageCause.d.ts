import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SharedTypes_Legacy_ActorDamageCause extends Enum<SharedTypes_Legacy_ActorDamageCause> {
    static Anvil: SharedTypes_Legacy_ActorDamageCause;
    static BlockExplosion: SharedTypes_Legacy_ActorDamageCause;
    static Campfire: SharedTypes_Legacy_ActorDamageCause;
    static Charging: SharedTypes_Legacy_ActorDamageCause;
    static Contact: SharedTypes_Legacy_ActorDamageCause;
    static Drowning: SharedTypes_Legacy_ActorDamageCause;
    static EntityAttack: SharedTypes_Legacy_ActorDamageCause;
    static EntityExplosion: SharedTypes_Legacy_ActorDamageCause;
    static Fall: SharedTypes_Legacy_ActorDamageCause;
    static FallingBlock: SharedTypes_Legacy_ActorDamageCause;
    static Fire: SharedTypes_Legacy_ActorDamageCause;
    static FireTick: SharedTypes_Legacy_ActorDamageCause;
    static Fireworks: SharedTypes_Legacy_ActorDamageCause;
    static FlyIntoWall: SharedTypes_Legacy_ActorDamageCause;
    static Freezing: SharedTypes_Legacy_ActorDamageCause;
    static Lava: SharedTypes_Legacy_ActorDamageCause;
    static Lightning: SharedTypes_Legacy_ActorDamageCause;
    static MaceSmash: SharedTypes_Legacy_ActorDamageCause;
    static Magic: SharedTypes_Legacy_ActorDamageCause;
    static Magma: SharedTypes_Legacy_ActorDamageCause;
    static Override: SharedTypes_Legacy_ActorDamageCause;
    static Piston: SharedTypes_Legacy_ActorDamageCause;
    static Projectile: SharedTypes_Legacy_ActorDamageCause;
    static RamAttack: SharedTypes_Legacy_ActorDamageCause;
    static SelfDestruct: SharedTypes_Legacy_ActorDamageCause;
    static SonicBoom: SharedTypes_Legacy_ActorDamageCause;
    static SoulCampfire: SharedTypes_Legacy_ActorDamageCause;
    static Stalactite: SharedTypes_Legacy_ActorDamageCause;
    static Stalagmite: SharedTypes_Legacy_ActorDamageCause;
    static Starve: SharedTypes_Legacy_ActorDamageCause;
    static Suffocation: SharedTypes_Legacy_ActorDamageCause;
    static Temperature: SharedTypes_Legacy_ActorDamageCause;
    static Thorns: SharedTypes_Legacy_ActorDamageCause;
    static Void: SharedTypes_Legacy_ActorDamageCause;
    static Wither: SharedTypes_Legacy_ActorDamageCause;
    static getByName(paramarg0: string): SharedTypes_Legacy_ActorDamageCause;
    static getByName(paramarg0: string, paramarg1: SharedTypes_Legacy_ActorDamageCause): SharedTypes_Legacy_ActorDamageCause;
    static getByValue(paramarg0: number): SharedTypes_Legacy_ActorDamageCause;
    static getByValue(paramarg0: number, paramarg1: SharedTypes_Legacy_ActorDamageCause): SharedTypes_Legacy_ActorDamageCause;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SharedTypes_Legacy_ActorDamageCause;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: SharedTypes_Legacy_ActorDamageCause)
    readonly value: number;
    getValue(): number;
    name(): "Override" | "Contact" | "EntityAttack" | "Projectile" | "Suffocation" | "Fall" | "Fire" | "FireTick" | "Lava" | "Drowning" | "BlockExplosion" | "EntityExplosion" | "Void" | "SelfDestruct" | "Magic" | "Wither" | "Starve" | "Anvil" | "Thorns" | "FallingBlock" | "Piston" | "FlyIntoWall" | "Magma" | "Fireworks" | "Lightning" | "Charging" | "Temperature" | "Freezing" | "Stalactite" | "Stalagmite" | "RamAttack" | "SonicBoom" | "Campfire" | "SoulCampfire" | "MaceSmash";
}