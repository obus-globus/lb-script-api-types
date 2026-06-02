import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class NametagTextFormatter$Part extends Enum<NametagTextFormatter$Part> implements Tagged {
    static BOT_MARK: NametagTextFormatter$Part;
    static Companion: Tagged$Companion;
    static DISTANCE: NametagTextFormatter$Part;
    static GAME_MODE: NametagTextFormatter$Part;
    static HEALTH: NametagTextFormatter$Part;
    static NAME: NametagTextFormatter$Part;
    static PING: NametagTextFormatter$Part;
    static getEntries(): NametagTextFormatter$Part[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NametagTextFormatter$Part;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    apply(entity: Entity): Component | null;
    name(): "DISTANCE" | "PING" | "NAME" | "HEALTH" | "GAME_MODE" | "BOT_MARK";
}