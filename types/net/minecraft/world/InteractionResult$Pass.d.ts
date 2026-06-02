import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { InteractionResult } from '../../../net/minecraft/world/InteractionResult.d.ts'
import type { InteractionResult$Fail } from '../../../net/minecraft/world/InteractionResult$Fail.d.ts'
import type { InteractionResult$Success } from '../../../net/minecraft/world/InteractionResult$Success.d.ts'
import type { InteractionResult$TryEmptyHandInteraction } from '../../../net/minecraft/world/InteractionResult$TryEmptyHandInteraction.d.ts'
export class InteractionResult$Pass extends Record implements InteractionResult {
    static CONSUME: InteractionResult$Success;
    static FAIL: InteractionResult$Fail;
    static PASS: InteractionResult$Pass;
    static SUCCESS: InteractionResult$Success;
    static SUCCESS_SERVER: InteractionResult$Success;
    static TRY_WITH_EMPTY_HAND: InteractionResult$TryEmptyHandInteraction;
    constructor()
    consumesAction(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}