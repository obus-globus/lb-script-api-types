import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementNode } from '../../../net/minecraft/advancements/AdvancementNode.d.ts'
import type { AdvancementTree$Listener } from '../../../net/minecraft/advancements/AdvancementTree$Listener.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class AdvancementTree extends Object {
    constructor()
    readonly listener: AdvancementTree$Listener;
    // private nodes: JavaMap<Identifier, AdvancementNode>;
    // private roots: AdvancementNode[];
    // private tasks: AdvancementNode[];
    addAll(advancements: AdvancementHolder[]): void;
    clear(): void;
    get(advancement: AdvancementHolder): AdvancementNode;
    get(id: Identifier): AdvancementNode;
    nodes(): AdvancementNode[];
    remove(ids: Identifier[]): void;
    // private remove(node: AdvancementNode): void;
    roots(): AdvancementNode[];
    setListener(listener: AdvancementTree$Listener): void;
    // private tryInsert(holder: AdvancementHolder): boolean;
}