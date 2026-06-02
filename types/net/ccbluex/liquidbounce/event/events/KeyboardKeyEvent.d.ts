import type { InputConstants$Key } from '../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export class KeyboardKeyEvent extends Event implements WebSocketEvent {
    constructor(key: InputConstants$Key, keyCode: number, scanCode: number, action: number, mods: number, screen: Screen | null)
    readonly action: number;
    readonly key: InputConstants$Key;
    readonly keyCode: number;
    readonly mods: number;
    readonly scanCode: number;
    readonly screen: Screen | null;
}