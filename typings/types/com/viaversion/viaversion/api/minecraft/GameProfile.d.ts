import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { GameProfile$Property } from '../../../../../com/viaversion/viaversion/api/minecraft/GameProfile$Property.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GameProfile extends Record {
    constructor(arg0: string, arg1: UUID)
    constructor(arg0: string, arg1: UUID, arg2: GameProfile$Property[])
    constructor(name: string, id: UUID, properties: GameProfile$Property[], dynamic: boolean)
    // private dynamic: boolean;
    // private id: UUID;
    // private name: string;
    // private properties: GameProfile$Property[];
    dynamic(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): UUID;
    name(): string;
    properties(): GameProfile$Property[];
    propertiesMap(): JavaMap<string, GameProfile$Property[]>;
    toString(): string;
}