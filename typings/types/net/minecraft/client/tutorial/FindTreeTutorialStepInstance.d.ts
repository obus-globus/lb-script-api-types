import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TutorialToast } from '../../../../net/minecraft/client/gui/components/toasts/TutorialToast.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientInput } from '../../../../net/minecraft/client/player/ClientInput.d.ts'
import type { LocalPlayer } from '../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Tutorial } from '../../../../net/minecraft/client/tutorial/Tutorial.d.ts'
import type { TutorialStepInstance } from '../../../../net/minecraft/client/tutorial/TutorialStepInstance.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { HitResult } from '../../../../net/minecraft/world/phys/HitResult.d.ts'
export class FindTreeTutorialStepInstance extends Object implements TutorialStepInstance {
    static hasPunchedTreesPreviously(paramplayer: LocalPlayer): boolean;
    constructor(tutorial: Tutorial)
    // private timeWaiting: number;
    // private toast: TutorialToast;
    // private tutorial: Tutorial;
    clear(): void;
    onDestroyBlock(level: ClientLevel, pos: BlockPos, state: BlockState, percent: number): void;
    onGetItem(itemStack: ItemStack): void;
    onInput(input: ClientInput): void;
    onLookAt(level: ClientLevel, hit: HitResult): void;
    onMouse(xd: number, yd: number): void;
    onOpenInventory(): void;
    tick(): void;
}