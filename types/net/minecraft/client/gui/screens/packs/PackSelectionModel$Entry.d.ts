import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackCompatibility } from '../../../../../../net/minecraft/server/packs/repository/PackCompatibility.d.ts'
import type { PackSource } from '../../../../../../net/minecraft/server/packs/repository/PackSource.d.ts'
export interface PackSelectionModel$Entry extends Object{
    canMoveDown(): boolean;
    canMoveUp(): boolean;
    canSelect(): boolean;
    canUnselect(): boolean;
    getCompatibility(): PackCompatibility;
    getDescription(): Component;
    getExtendedDescription(): Component;
    getIconTexture(): Identifier;
    getId(): string;
    getPackSource(): PackSource;
    getTitle(): Component;
    isFixedPosition(): boolean;
    isRequired(): boolean;
    isSelected(): boolean;
    moveDown(): void;
    moveUp(): void;
    select(): void;
    unselect(): void;
}