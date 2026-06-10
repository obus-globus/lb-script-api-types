import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { TitleEvent$Subtitle } from '../../../../../../../net/ccbluex/liquidbounce/event/events/TitleEvent$Subtitle.d.ts'
import type { TitleEvent$TextContent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/TitleEvent$TextContent.d.ts'
import type { TitleEvent$Title } from '../../../../../../../net/ccbluex/liquidbounce/event/events/TitleEvent$Title.d.ts'
import type { ShowIn } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ShowIn.d.ts'
import type { TitleType } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/TitleType.d.ts'
export class AutoTranslate extends ToggleableValueGroup {
    static INSTANCE: AutoTranslate;
    // private components: TitleType[];
    // private /*not mapped: */ getComponents(): TitleType[];
    // private showIn: ShowIn[];
    // private /*not mapped: */ getShowIn(): ShowIn[];
    // private subtitleHandler: EventHook<TitleEvent$Subtitle>;
    // private titleHandler: EventHook<TitleEvent$Title>;
    // private translatorHandler<E extends TitleEvent$TextContent>(type: TitleType): EventHook<E>;
}