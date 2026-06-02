import type { ListMultimap } from '../../../com/google/common/collect/ListMultimap.d.ts'
import type { Gson } from '../../../com/google/gson/Gson.d.ts'
import type { Mod } from '../../../com/terraformersmc/modmenu/util/mod/Mod.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ClientModInitializer } from '../../../net/fabricmc/api/ClientModInitializer.d.ts'
import type { Screen } from '../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
export class ModMenu extends Object implements ClientModInitializer {
    static DEV_ENVIRONMENT: boolean;
    static GITHUB_REF: string;
    static GSON: Gson;
    static GSON_MINIFIED: Gson;
    static LOGGER: Logger;
    static MODS: { [key: string]: Mod };
    static MOD_ID: string;
    static PARENT_MAP: ListMultimap<Mod, Mod>;
    static ROOT_MODS: { [key: string]: Mod };
    static RUNNING_QUILT: boolean;
    static TEXT_PLACEHOLDER_COMPAT: boolean;
    static areModUpdatesAvailable(): boolean;
    static checkForUpdates(): void;
    static clearModCountCache(): void;
    static createModsButtonText(paramarg0: boolean): Component;
    static getConfigScreen(paramarg0: string, paramarg1: Screen): Screen;
    static getDisplayedModCount(): string;
    static hasConfigScreen(paramarg0: string): boolean;
    constructor()
    onInitializeClient(): void;
}