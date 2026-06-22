import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PackSelectionModel$Entry } from '../../../../../../net/minecraft/client/gui/screens/packs/PackSelectionModel$Entry.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Pack } from '../../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
import type { PackCompatibility } from '../../../../../../net/minecraft/server/packs/repository/PackCompatibility.d.ts'
import type { PackSource } from '../../../../../../net/minecraft/server/packs/repository/PackSource.d.ts'
export abstract class PackSelectionModel$EntryBase extends Object implements PackSelectionModel$Entry {
    constructor(null_: PackSelectionModel$EntryBase, pack: Pack)
    // private pack: Pack;
    canMoveDown(): boolean;
    canMoveUp(): boolean;
    canSelect(): boolean;
    canUnselect(): boolean;
    getCompatibility(): PackCompatibility;
    getDescription(): Component;
    getExtendedDescription(): Component;
    getIconTexture(): Identifier;
    getId(): string;
    getOtherList(): Pack[];
    getPackSource(): PackSource;
    getSelfList(): Pack[];
    getTitle(): Component;
    isFixedPosition(): boolean;
    isRequired(): boolean;
    isSelected(): boolean;
    move(direction: number): void;
    moveDown(): void;
    moveUp(): void;
    select(): void;
    toggleSelection(): void;
    unselect(): void;
    // private updateHighContrastOptionInstance(): void;
}