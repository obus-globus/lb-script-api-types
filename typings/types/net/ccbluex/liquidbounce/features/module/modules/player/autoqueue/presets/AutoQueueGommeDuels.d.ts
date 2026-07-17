import type { Continuation } from '../../../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ChatReceiveEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/ChatReceiveEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class AutoQueueGommeDuels extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: AutoQueueGommeDuels;
    readonly chatReceiveEvent: EventHook<ChatReceiveEvent>;
    // private controlKillAura: boolean;
    // private /*not mapped: */ getControlKillAura(): boolean;
    // private inMatch: boolean;
    // private loseMessage: string;
    // private /*not mapped: */ getLoseMessage(): string;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private winMessage: string;
    // private /*not mapped: */ getWinMessage(): string;
    disable(): void;
    enable(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private handleDuelsSituation($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private handleLobbySituation($completion: Continuation<void>): any;
}