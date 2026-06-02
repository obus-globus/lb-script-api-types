import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class GameRuleCategory extends Record {
    static CHAT: GameRuleCategory;
    static DROPS: GameRuleCategory;
    static MISC: GameRuleCategory;
    static MOBS: GameRuleCategory;
    static PLAYER: GameRuleCategory;
    static SPAWNING: GameRuleCategory;
    static UPDATES: GameRuleCategory;
    static register(paramid: Identifier): GameRuleCategory;
    constructor(id: Identifier)
    // private id: Identifier;
    equals(o: Object | null): boolean;
    getDescriptionId(): Identifier;
    hashCode(): number;
    id(): Identifier;
    label(): MutableComponent;
    toString(): string;
}