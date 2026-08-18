import type { JavaMap } from '../../../JavaMap.d.ts'
import type { InputConstants$Key } from '../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { InputConstants$Type } from '../../../com/mojang/blaze3d/platform/InputConstants$Type.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
import type { KeyMappingAccessor } from '../../../net/fabricmc/fabric/mixin/client/keymapping/KeyMappingAccessor.d.ts'
import type { KeyMappingAccessor as KeyMappingAccessor_2 } from '../../../net/fabricmc/fabric/mixin/event/interaction/client/KeyMappingAccessor.d.ts'
import type { KeyMapping$Category } from '../../../net/minecraft/client/KeyMapping$Category.d.ts'
import type { KeyEvent } from '../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class KeyMapping extends Object implements Comparable<KeyMapping>, KeyMappingAccessor, KeyMappingAccessor_2 {
    static ALL: JavaMap<string, KeyMapping>;
    static MAP: JavaMap<InputConstants$Key, KeyMapping[]>;
    static click(paramkey: InputConstants$Key): void;
    static createNameSupplier(paramkey: string): () => Component;
    static get(paramname: string): KeyMapping;
    static releaseAll(): void;
    static resetMapping(): void;
    static resetToggleKeys(): void;
    static restoreToggleStatesOnScreenClosed(): void;
    static set(paramkey: InputConstants$Key, paramstate: boolean): void;
    static setAll(): void;
    constructor(name: string, type: InputConstants$Type, value: number, category: KeyMapping$Category)
    constructor(name: string, type: InputConstants$Type, value: number, category: KeyMapping$Category, order: number)
    constructor(name: string, keysym: number, category: KeyMapping$Category)
    readonly category: KeyMapping$Category;
    clickCount: number;
    readonly defaultKey: InputConstants$Key;
    // private isDown: boolean;
    key: InputConstants$Key;
    readonly name: string;
    // private order: number;
    compareTo(o: KeyMapping): number;
    consumeClick(): boolean;
    fabric_getBoundKey(): InputConstants$Key;
    fabric_getTimesPressed(): number;
    getCategory(): KeyMapping$Category;
    getDefaultKey(): InputConstants$Key;
    getName(): string;
    getTranslatedKeyMessage(): Component;
    isDefault(): boolean;
    isDown(): boolean;
    isUnbound(): boolean;
    matches(key: InputConstants$Key): boolean;
    matches(event: KeyEvent): boolean;
    matchesMouse(event: MouseButtonEvent): boolean;
    // private registerMapping(key: InputConstants$Key): void;
    release(): void;
    same(that: KeyMapping): boolean;
    saveString(): string;
    setDown(down: boolean): void;
    setKey(key: InputConstants$Key): void;
    shouldSetOnIngameFocus(): boolean;
}