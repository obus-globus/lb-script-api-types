import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ScreenEvents$AfterBackground } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenEvents$AfterBackground.d.ts'
import type { ScreenEvents$AfterExtract } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenEvents$AfterExtract.d.ts'
import type { ScreenEvents$AfterTick } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenEvents$AfterTick.d.ts'
import type { ScreenEvents$BeforeExtract } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenEvents$BeforeExtract.d.ts'
import type { ScreenEvents$BeforeTick } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenEvents$BeforeTick.d.ts'
import type { ScreenEvents$Remove } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenEvents$Remove.d.ts'
import type { ScreenKeyboardEvents$AfterKeyPress } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenKeyboardEvents$AfterKeyPress.d.ts'
import type { ScreenKeyboardEvents$AfterKeyRelease } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenKeyboardEvents$AfterKeyRelease.d.ts'
import type { ScreenKeyboardEvents$AllowKeyPress } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenKeyboardEvents$AllowKeyPress.d.ts'
import type { ScreenKeyboardEvents$AllowKeyRelease } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenKeyboardEvents$AllowKeyRelease.d.ts'
import type { ScreenKeyboardEvents$BeforeKeyPress } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenKeyboardEvents$BeforeKeyPress.d.ts'
import type { ScreenKeyboardEvents$BeforeKeyRelease } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenKeyboardEvents$BeforeKeyRelease.d.ts'
import type { ScreenMouseEvents$AfterMouseClick } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AfterMouseClick.d.ts'
import type { ScreenMouseEvents$AfterMouseDrag } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AfterMouseDrag.d.ts'
import type { ScreenMouseEvents$AfterMouseRelease } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AfterMouseRelease.d.ts'
import type { ScreenMouseEvents$AfterMouseScroll } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AfterMouseScroll.d.ts'
import type { ScreenMouseEvents$AllowMouseClick } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AllowMouseClick.d.ts'
import type { ScreenMouseEvents$AllowMouseDrag } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AllowMouseDrag.d.ts'
import type { ScreenMouseEvents$AllowMouseRelease } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AllowMouseRelease.d.ts'
import type { ScreenMouseEvents$AllowMouseScroll } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AllowMouseScroll.d.ts'
import type { ScreenMouseEvents$BeforeMouseClick } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$BeforeMouseClick.d.ts'
import type { ScreenMouseEvents$BeforeMouseDrag } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$BeforeMouseDrag.d.ts'
import type { ScreenMouseEvents$BeforeMouseRelease } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$BeforeMouseRelease.d.ts'
import type { ScreenMouseEvents$BeforeMouseScroll } from '../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$BeforeMouseScroll.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export class ScreenEventFactory extends Object {
    static createAfterBackgroundEvent(): Event<(param0: Screen, param1: GuiGraphicsExtractor, param2: number, param3: number, param4: number) => void>;
    static createAfterKeyPressEvent(): Event<(param0: Screen, param1: KeyEvent) => void>;
    static createAfterKeyReleaseEvent(): Event<(param0: Screen, param1: KeyEvent) => void>;
    static createAfterMouseClickEvent(): Event<(param0: Screen, param1: MouseButtonEvent, param2: boolean) => boolean>;
    static createAfterMouseDragEvent(): Event<(param0: Screen, param1: MouseButtonEvent, param2: number, param3: number, param4: boolean) => boolean>;
    static createAfterMouseReleaseEvent(): Event<(param0: Screen, param1: MouseButtonEvent, param2: boolean) => boolean>;
    static createAfterMouseScrollEvent(): Event<(param0: Screen, param1: number, param2: number, param3: number, param4: number, param5: boolean) => boolean>;
    static createAfterRenderEvent(): Event<(param0: Screen, param1: GuiGraphicsExtractor, param2: number, param3: number, param4: number) => void>;
    static createAfterTickEvent(): Event<(param0: Screen) => void>;
    static createAllowKeyPressEvent(): Event<(param0: Screen, param1: KeyEvent) => boolean>;
    static createAllowKeyReleaseEvent(): Event<(param0: Screen, param1: KeyEvent) => boolean>;
    static createAllowMouseClickEvent(): Event<(param0: Screen, param1: MouseButtonEvent) => boolean>;
    static createAllowMouseDragEvent(): Event<(param0: Screen, param1: MouseButtonEvent, param2: number, param3: number) => boolean>;
    static createAllowMouseReleaseEvent(): Event<(param0: Screen, param1: MouseButtonEvent) => boolean>;
    static createAllowMouseScrollEvent(): Event<(param0: Screen, param1: number, param2: number, param3: number, param4: number) => boolean>;
    static createBeforeKeyPressEvent(): Event<(param0: Screen, param1: KeyEvent) => void>;
    static createBeforeKeyReleaseEvent(): Event<(param0: Screen, param1: KeyEvent) => void>;
    static createBeforeMouseClickEvent(): Event<(param0: Screen, param1: MouseButtonEvent) => void>;
    static createBeforeMouseDragEvent(): Event<(param0: Screen, param1: MouseButtonEvent, param2: number, param3: number) => void>;
    static createBeforeMouseReleaseEvent(): Event<(param0: Screen, param1: MouseButtonEvent) => void>;
    static createBeforeMouseScrollEvent(): Event<(param0: Screen, param1: number, param2: number, param3: number, param4: number) => void>;
    static createBeforeRenderEvent(): Event<(param0: Screen, param1: GuiGraphicsExtractor, param2: number, param3: number, param4: number) => void>;
    static createBeforeTickEvent(): Event<(param0: Screen) => void>;
    static createRemoveEvent(): Event<(param0: Screen) => void>;
    private constructor()
}