import type { Object } from '../../../java/lang/Object.d.ts'
import type { Advancement } from '../../../net/minecraft/advancements/Advancement.d.ts'
import type { AdvancementHolder } from '../../../net/minecraft/advancements/AdvancementHolder.d.ts'
export class AdvancementNode extends Object {
    static getRoot(paramadvancement: AdvancementNode): AdvancementNode;
    constructor(holder: AdvancementHolder, parent: AdvancementNode)
    // private children: AdvancementNode[];
    // private holder: AdvancementHolder;
    // private parent: AdvancementNode;
    addChild(child: AdvancementNode): void;
    advancement(): Advancement;
    children(): AdvancementNode[];
    equals(obj: Object | null): boolean;
    hashCode(): number;
    holder(): AdvancementHolder;
    parent(): AdvancementNode;
    root(): AdvancementNode;
    toString(): string;
}