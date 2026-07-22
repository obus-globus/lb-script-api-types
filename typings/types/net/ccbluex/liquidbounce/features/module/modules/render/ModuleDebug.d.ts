import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { OverlayRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { DebuggedOwner } from '../../../../../../../net/ccbluex/liquidbounce/features/misc/DebuggedOwner.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleDebug$DebuggedGeometry } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleDebug$DebuggedGeometry.d.ts'
import type { ModuleDebug$DebuggedKey } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleDebug$DebuggedKey.d.ts'
import type { ModuleDebug$ParameterCapture } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleDebug$ParameterCapture.d.ts'
import type { FontRenderer } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontRenderer.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ModuleDebug extends ClientModule {
    static INSTANCE: ModuleDebug;
    // private KEY_COMPARATOR: (param0: ModuleDebug$DebuggedKey, param1: ModuleDebug$DebuggedKey) => number;
    // private debugParameters: JavaMap<ModuleDebug$DebuggedKey, ModuleDebug$ParameterCapture>;
    // private debuggedGeometry: JavaMap<ModuleDebug$DebuggedKey, ModuleDebug$DebuggedGeometry>;
    // private expireHandler: EventHook<GameTickEvent>;
    // private expireTime: number;
    // private /*not mapped: */ getExpireTime(): number;
    // private /*not mapped: */ getFontRenderer(): FontRenderer;
    // private geometry: boolean;
    // private /*not mapped: */ getGeometry(): boolean;
    // private parameters: boolean;
    // private /*not mapped: */ getParameters(): boolean;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private screenRenderHandler: EventHook<OverlayRenderEvent>;
    debugGeometry(owner: DebuggedOwner, name: string, geometry: ModuleDebug$DebuggedGeometry | null): void;
    debugParameter(owner: DebuggedOwner, name: string, value: Object | null): void;
    getArrayEntryColor(idx: number, length: number): Color4b;
    onDisabled(): void;
}