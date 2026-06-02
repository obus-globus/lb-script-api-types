import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ObjectiveCriteria$RenderType } from '../../../../../net/minecraft/world/scores/criteria/ObjectiveCriteria$RenderType.d.ts'
export class ObjectiveCriteria extends Object {
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
    static TEAM_KILL: (Object | null)[];
    static TRIGGER: ObjectiveCriteria;
    static byName(paramname: string): Optional<ObjectiveCriteria>;
    static getCustomCriteriaNames(): string[];
    static registerCustom(paramname: string): ObjectiveCriteria;
    static registerCustom(paramname: string, paramreadOnly: boolean, paramrenderType: ObjectiveCriteria$RenderType): ObjectiveCriteria;
    constructor(name: string)
    constructor(name: string, readOnly: boolean, renderType: ObjectiveCriteria$RenderType)
    readonly name: string;
    readonly readOnly: boolean;
    // private renderType: ObjectiveCriteria$RenderType;
    getDefaultRenderType(): ObjectiveCriteria$RenderType;
    getName(): string;
    isReadOnly(): boolean;
}