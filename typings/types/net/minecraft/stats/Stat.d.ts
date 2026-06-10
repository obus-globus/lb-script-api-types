import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StatFormatter } from '../../../net/minecraft/stats/StatFormatter.d.ts'
import type { ObjectiveCriteria } from '../../../net/minecraft/world/scores/criteria/ObjectiveCriteria.d.ts'
import type { ObjectiveCriteria$RenderType } from '../../../net/minecraft/world/scores/criteria/ObjectiveCriteria$RenderType.d.ts'
export class Stat<T extends Object | number | string | boolean> extends ObjectiveCriteria {
    static AIR: ObjectiveCriteria;
    static ARMOR: ObjectiveCriteria;
    static CODEC: Codec<ObjectiveCriteria>;
    static DEATH_COUNT: ObjectiveCriteria;
    static DUMMY: ObjectiveCriteria;
    static EXPERIENCE: ObjectiveCriteria;
    static FOOD: ObjectiveCriteria;
    static HEALTH: ObjectiveCriteria;
    static KILLED_BY_TEAM: (Object | null)[];
    static KILL_COUNT_ALL: ObjectiveCriteria;
    static KILL_COUNT_PLAYERS: ObjectiveCriteria;
    static LEVEL: ObjectiveCriteria;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Stat<Object>>;
    static TEAM_KILL: (Object | null)[];
    static TRIGGER: ObjectiveCriteria;
    static buildName(paramtype: Stat<Object>[], paramvalue: Object | null): string;
    static byName(paramname: string): Optional<ObjectiveCriteria>;
    static getCustomCriteriaNames(): string[];
    static registerCustom(paramname: string): ObjectiveCriteria;
    static registerCustom(paramname: string, paramreadOnly: boolean, paramrenderType: ObjectiveCriteria$RenderType): ObjectiveCriteria;
    constructor(type: Stat<T>[], value: T, formatter: StatFormatter)
    // private formatter: StatFormatter;
    readonly type: Stat<T>[];
    readonly value: T;
    equals(o: Object | null): boolean;
    format(value: number): string;
    getType(): Stat<T>[];
    getValue(): T;
    hashCode(): number;
    toString(): string;
}