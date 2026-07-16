import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Packet } from '../../../../../../../net/minecraft/network/protocol/Packet.d.ts'
export class ModuleFakeLag$FlushOn extends Enum<ModuleFakeLag$FlushOn> implements Predicate<Packet<any>>, Tagged {
    static ACTION: ModuleFakeLag$FlushOn;
    static BLOCK_INTERACT: ModuleFakeLag$FlushOn;
    static Companion: Tagged$Companion;
    static ENTITY_INTERACT: ModuleFakeLag$FlushOn;
    static getEntries(): ModuleFakeLag$FlushOn[];
    static isEqual<T extends unknown>(paramarg0: Object): (param0: T) => boolean;
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static not<T extends unknown>(paramarg0: (param0: Object) => boolean): (param0: T) => boolean;
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleFakeLag$FlushOn;
    static values(): ModuleFakeLag$FlushOn[];
    private constructor(tag: string, testPacket: (param0: Packet<any> | null) => boolean)
    readonly tag: string;
    // private testPacket: (param0: Packet<any> | null) => boolean;
    and(arg0: (param0: Packet<any> | null) => boolean): (param0: Packet<any> | null) => boolean;
    negate(): (param0: Packet<any> | null) => boolean;
    or(arg0: (param0: Packet<any> | null) => boolean): (param0: Packet<any> | null) => boolean;
    test(p0: Packet<any> | null): boolean;
    name(): "ENTITY_INTERACT" | "BLOCK_INTERACT" | "ACTION";
}