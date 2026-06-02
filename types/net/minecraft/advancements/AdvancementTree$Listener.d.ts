import type { Object } from '../../../java/lang/Object.d.ts'
import type { AdvancementNode } from '../../../net/minecraft/advancements/AdvancementNode.d.ts'
export interface AdvancementTree$Listener extends Object{
    onAddAdvancementRoot(root: AdvancementNode): void;
    onAddAdvancementTask(task: AdvancementNode): void;
    onAdvancementsCleared(): void;
    onRemoveAdvancementRoot(root: AdvancementNode): void;
    onRemoveAdvancementTask(task: AdvancementNode): void;
}