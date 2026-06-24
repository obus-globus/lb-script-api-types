import type { Regex } from '../../../../../../../kotlin/text/Regex.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ScreenEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleGUICloser$Mode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleGUICloser$Mode.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Closes HandledScreen with its title contains specified words
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleGUICloser.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleGUICloser.kt:36}
 */
export class ModuleGUICloser extends ClientModule {
    static INSTANCE: ModuleGUICloser;
    readonly baseKey: string;
    // private filters: Regex[];
    // private /*not mapped: */ getFilters(): Regex[];
    // private mode: ModuleGUICloser$Mode;
    // private /*not mapped: */ getMode(): ModuleGUICloser$Mode;
    // private openScreenHandler: EventHook<ScreenEvent>;
    // private printScreenTitle: boolean;
    // private /*not mapped: */ getPrintScreenTitle(): boolean;
    // private isInFilter(entry: Component): boolean;
}