import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleTotemEffect$TotemPopSnapshot } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/totemeffect/ModuleTotemEffect$TotemPopSnapshot.d.ts'
import type { TotemEffectMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/totemeffect/TotemEffectMode.d.ts'
export class ModuleTotemEffect extends ClientModule {
    static INSTANCE: ModuleTotemEffect;
    readonly entities: ModuleTotemEffect$TotemPopSnapshot[];
    readonly modes: ModeValueGroup<TotemEffectMode>;
    getModes(): ModeValueGroup<TotemEffectMode>;
    // private totemHandler: EventHook<PacketEvent>;
    onDisabled(): void;
}