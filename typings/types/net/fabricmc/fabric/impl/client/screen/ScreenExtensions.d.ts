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
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export interface ScreenExtensions extends Object {
    fabric_getAfterBackgroundEvent(): Event<(param0: Screen, param1: GuiGraphicsExtractor, param2: number, param3: number, param4: number) => void>;
    fabric_getAfterKeyPressEvent(): Event<(param0: Screen, param1: KeyEvent) => void>;
    fabric_getAfterKeyReleaseEvent(): Event<(param0: Screen, param1: KeyEvent) => void>;
    fabric_getAfterMouseClickEvent(): Event<(param0: Screen, param1: MouseButtonEvent, param2: boolean) => boolean>;
    fabric_getAfterMouseDragEvent(): Event<(param0: Screen, param1: MouseButtonEvent, param2: number, param3: number, param4: boolean) => boolean>;
    fabric_getAfterMouseReleaseEvent(): Event<(param0: Screen, param1: MouseButtonEvent, param2: boolean) => boolean>;
    fabric_getAfterMouseScrollEvent(): Event<(param0: Screen, param1: number, param2: number, param3: number, param4: number, param5: boolean) => boolean>;
    fabric_getAfterRenderEvent(): Event<(param0: Screen, param1: GuiGraphicsExtractor, param2: number, param3: number, param4: number) => void>;
    fabric_getAfterTickEvent(): Event<(param0: Screen) => void>;
    fabric_getAllowKeyPressEvent(): Event<(param0: Screen, param1: KeyEvent) => boolean>;
    fabric_getAllowKeyReleaseEvent(): Event<(param0: Screen, param1: KeyEvent) => boolean>;
    fabric_getAllowMouseClickEvent(): Event<(param0: Screen, param1: MouseButtonEvent) => boolean>;
    fabric_getAllowMouseDragEvent(): Event<(param0: Screen, param1: MouseButtonEvent, param2: number, param3: number) => boolean>;
    fabric_getAllowMouseReleaseEvent(): Event<(param0: Screen, param1: MouseButtonEvent) => boolean>;
    fabric_getAllowMouseScrollEvent(): Event<(param0: Screen, param1: number, param2: number, param3: number, param4: number) => boolean>;
    fabric_getBeforeKeyPressEvent(): Event<(param0: Screen, param1: KeyEvent) => void>;
    fabric_getBeforeKeyReleaseEvent(): Event<(param0: Screen, param1: KeyEvent) => void>;
    fabric_getBeforeMouseClickEvent(): Event<(param0: Screen, param1: MouseButtonEvent) => void>;
    fabric_getBeforeMouseDragEvent(): Event<(param0: Screen, param1: MouseButtonEvent, param2: number, param3: number) => void>;
    fabric_getBeforeMouseReleaseEvent(): Event<(param0: Screen, param1: MouseButtonEvent) => void>;
    fabric_getBeforeMouseScrollEvent(): Event<(param0: Screen, param1: number, param2: number, param3: number, param4: number) => void>;
    fabric_getBeforeRenderEvent(): Event<(param0: Screen, param1: GuiGraphicsExtractor, param2: number, param3: number, param4: number) => void>;
    fabric_getBeforeTickEvent(): Event<(param0: Screen) => void>;
    fabric_getButtons(): AbstractWidget[];
    fabric_getRemoveEvent(): Event<(param0: Screen) => void>;
}