import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { Options } from '../../../../net/minecraft/client/Options.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientInput } from '../../../../net/minecraft/client/player/ClientInput.d.ts'
import type { TutorialStepInstance } from '../../../../net/minecraft/client/tutorial/TutorialStepInstance.d.ts'
import type { TutorialSteps } from '../../../../net/minecraft/client/tutorial/TutorialSteps.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClickAction } from '../../../../net/minecraft/world/inventory/ClickAction.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { HitResult } from '../../../../net/minecraft/world/phys/HitResult.d.ts'
export class Tutorial extends Object {
    static key(paramname: string): Component;
    constructor(minecraft: Minecraft, options: Options)
    // private instance: TutorialStepInstance;
    readonly minecraft: Minecraft;
    getMinecraft(): Minecraft;
    isSurvival(): boolean;
    onDestroyBlock(level: ClientLevel, pos: BlockPos, state: BlockState, percent: number): void;
    onGetItem(itemStack: ItemStack): void;
    onInput(input: ClientInput): void;
    onInventoryAction(itemCarried: ItemStack, itemInSlot: ItemStack, clickAction: ClickAction): void;
    onLookAt(level: ClientLevel, hit: HitResult): void;
    onMouse(xd: number, yd: number): void;
    onOpenInventory(): void;
    setStep(step: TutorialSteps): void;
    start(): void;
    stop(): void;
    tick(): void;
}