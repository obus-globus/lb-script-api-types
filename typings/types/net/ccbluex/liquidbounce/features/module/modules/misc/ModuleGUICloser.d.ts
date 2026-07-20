import type { Regex } from '../../../../../../../kotlin/text/Regex.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ScreenEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleGUICloser$Mode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleGUICloser$Mode.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Closes HandledScreen with its title contains specified words
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleGUICloser.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleGUICloser.kt:39}
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