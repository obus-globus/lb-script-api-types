import type { Component } from '../../../../java/awt/Component.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { JList } from '../../../../javax/swing/JList.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
export class PlayerListComponent extends JList<string> {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static ERROR: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static HORIZONTAL_WRAP: number;
    static LEFT_ALIGNMENT: number;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static SOMEBITS: number;
    static TOOL_TIP_TEXT_KEY: string;
    static TOP_ALIGNMENT: number;
    static UNDEFINED_CONDITION: number;
    static VERTICAL: number;
    static VERTICAL_WRAP: number;
    static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
    static WHEN_FOCUSED: number;
    static WHEN_IN_FOCUSED_WINDOW: number;
    static WIDTH: number;
    static getDefaultLocale(): Locale;
    static isLightweightComponent(paramarg0: Component): boolean;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor(server: MinecraftServer)
    // private server: MinecraftServer;
    // private tickCount: number;
    tick(): void;
}