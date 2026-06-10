import type { InputConstants$Key } from '../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { InputConstants$Type } from '../../../com/mojang/blaze3d/platform/InputConstants$Type.d.ts'
import type { BooleanSupplier } from '../../../java/util/function/BooleanSupplier.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { KeyMapping } from '../../../net/minecraft/client/KeyMapping.d.ts'
import type { KeyMapping$Category } from '../../../net/minecraft/client/KeyMapping$Category.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class ToggleKeyMapping extends KeyMapping {
    static click(paramkey: InputConstants$Key): void;
    static createNameSupplier(paramkey: string): () => Component;
    static get(paramname: string): KeyMapping;
    static releaseAll(): void;
    static resetMapping(): void;
    static resetToggleKeys(): void;
    static restoreToggleStatesOnScreenClosed(): void;
    static set(paramkey: InputConstants$Key, paramstate: boolean): void;
    static setAll(): void;
    constructor(name: string, type: InputConstants$Type, value: number, category: KeyMapping$Category, needsToggle: () => boolean, shouldRestore: boolean)
    constructor(name: string, value: number, category: KeyMapping$Category, needsToggle: () => boolean, shouldRestore: boolean)
    // private needsToggle: () => boolean;
    // private releasedByScreenWhenDown: boolean;
    // private shouldRestore: boolean;
    release(): void;
    reset(): void;
    setDown(down: boolean): void;
    shouldRestoreStateOnScreenClosed(): boolean;
    shouldSetOnIngameFocus(): boolean;
}