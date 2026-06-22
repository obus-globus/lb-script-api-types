import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementNode } from '../../../../net/minecraft/advancements/AdvancementNode.d.ts'
import type { AdvancementProgress } from '../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
import type { AdvancementTree$Listener } from '../../../../net/minecraft/advancements/AdvancementTree$Listener.d.ts'
export interface ClientAdvancements$Listener extends Object, AdvancementTree$Listener{
    onAddAdvancementRoot(root: AdvancementNode): void;
    onAddAdvancementTask(task: AdvancementNode): void;
    onAdvancementsCleared(): void;
    onRemoveAdvancementRoot(root: AdvancementNode): void;
    onRemoveAdvancementTask(task: AdvancementNode): void;
    onSelectedTabChanged(selectedTab: AdvancementHolder): void;
    onUpdateAdvancementProgress(advancement: AdvancementNode, progress: AdvancementProgress): void;
}