import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModuleCategory } from '../../../../../net/ccbluex/liquidbounce/features/module/ModuleCategory.d.ts'
export class ModuleCategories extends Object {
    static COMBAT: ModuleCategory;
    static EXPLOIT: ModuleCategory;
    static FUN: ModuleCategory;
    static INSTANCE: ModuleCategories;
    static MISC: ModuleCategory;
    static MOVEMENT: ModuleCategory;
    static PLAYER: ModuleCategory;
    static RENDER: ModuleCategory;
    static WORLD: ModuleCategory;
    static byName(name: string): ModuleCategory;
    static getEntries(): E[];
    COMBAT: ModuleCategory;
    EXPLOIT: ModuleCategory;
    FUN: ModuleCategory;
    MISC: ModuleCategory;
    MOVEMENT: ModuleCategory;
    PLAYER: ModuleCategory;
    RENDER: ModuleCategory;
    WORLD: ModuleCategory;
    /*not mapped: */ getEntries(): E[];
    // private registry: { [key: string]: ModuleCategory };
    byName(name: string): ModuleCategory | null;
    // private register(category: ModuleCategory): ModuleCategory;
}