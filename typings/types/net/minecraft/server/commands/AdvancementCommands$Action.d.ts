import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { AdvancementHolder } from '../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class AdvancementCommands$Action extends Enum<AdvancementCommands$Action> {
    static GRANT: AdvancementCommands$Action;
    static REVOKE: AdvancementCommands$Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): AdvancementCommands$Action;
    static values(): (Object | null)[];
    private constructor(key: string)
    // private key: string;
    getKey(): string;
    perform(player: ServerPlayer, advancements: AdvancementHolder[], showAdvancements: boolean): number;
    perform(player: ServerPlayer, advancement: AdvancementHolder): boolean;
    performCriterion(player: ServerPlayer, advancement: AdvancementHolder, criterion: string): boolean;
    name(): "GRANT" | "REVOKE";
}