import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementNode } from '../../../../net/minecraft/advancements/AdvancementNode.d.ts'
import type { AdvancementProgress } from '../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
import type { AdvancementTree$Listener } from '../../../../net/minecraft/advancements/AdvancementTree$Listener.d.ts'
export interface ClientAdvancements$Listener extends Object, AdvancementTree$Listener{
    onSelectedTabChanged(selectedTab: AdvancementHolder): void;
    onUpdateAdvancementProgress(advancement: AdvancementNode, progress: AdvancementProgress): void;
}