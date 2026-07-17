import type { Pool } from '../../../../../../../../net/ccbluex/fastutil/Pool.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleNameProtect$MappedCharacter } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/ModuleNameProtect$MappedCharacter.d.ts'
import type { ModuleNameProtect$WrappedOrderedText } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/ModuleNameProtect$WrappedOrderedText.d.ts'
import type { NameProtectMappings } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.d.ts'
import type { NameProtectMappings$ColoringInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings$ColoringInfo.d.ts'
import type { GenericColorMode } from '../../../../../../../../net/ccbluex/liquidbounce/render/GenericColorMode.d.ts'
import type { Style } from '../../../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
/**
 * NameProtect module
 *
 * Changes players names clientside.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/ModuleNameProtect.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/ModuleNameProtect.kt:52}
 */
export class ModuleNameProtect extends ClientModule {
    static INSTANCE: ModuleNameProtect;
    // private colorMode: ModeValueGroup<GenericColorMode<void>>;
    // private coloringInfo: NameProtectMappings$ColoringInfo;
    // private mappedCharListPool: Pool<ModuleNameProtect$MappedCharacter[]>;
    // private orderedTextMappingCache: Map<(param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, ModuleNameProtect$WrappedOrderedText>;
    // private renderHandler: EventHook<GameTickEvent>;
    // private replacement: string;
    // private /*not mapped: */ getReplacement(): string;
    // private replacementMappings: NameProtectMappings;
    // private stringMappingCache: { [key: string]: string };
    replace(original: string): string;
    // private uncachedReplace(original: string): string;
    // private uncachedWrap(original: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean): ModuleNameProtect$WrappedOrderedText;
    wrap(original: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
}