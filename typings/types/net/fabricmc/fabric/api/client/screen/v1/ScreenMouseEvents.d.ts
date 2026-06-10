import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ScreenMouseEvents$AfterMouseClick } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AfterMouseClick.d.ts'
import type { ScreenMouseEvents$AfterMouseDrag } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AfterMouseDrag.d.ts'
import type { ScreenMouseEvents$AfterMouseRelease } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AfterMouseRelease.d.ts'
import type { ScreenMouseEvents$AfterMouseScroll } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AfterMouseScroll.d.ts'
import type { ScreenMouseEvents$AllowMouseClick } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AllowMouseClick.d.ts'
import type { ScreenMouseEvents$AllowMouseDrag } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AllowMouseDrag.d.ts'
import type { ScreenMouseEvents$AllowMouseRelease } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AllowMouseRelease.d.ts'
import type { ScreenMouseEvents$AllowMouseScroll } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$AllowMouseScroll.d.ts'
import type { ScreenMouseEvents$BeforeMouseClick } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$BeforeMouseClick.d.ts'
import type { ScreenMouseEvents$BeforeMouseDrag } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$BeforeMouseDrag.d.ts'
import type { ScreenMouseEvents$BeforeMouseRelease } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$BeforeMouseRelease.d.ts'
import type { ScreenMouseEvents$BeforeMouseScroll } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenMouseEvents$BeforeMouseScroll.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { MouseButtonEvent } from '../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export class ScreenMouseEvents extends Object {
    static afterMouseClick(paramarg0: Screen): Event<(param0: Screen, param1: MouseButtonEvent, param2: boolean) => boolean>;
    static afterMouseDrag(paramarg0: Screen): Event<(param0: Screen, param1: MouseButtonEvent, param2: number, param3: number, param4: boolean) => boolean>;
    static afterMouseRelease(paramarg0: Screen): Event<(param0: Screen, param1: MouseButtonEvent, param2: boolean) => boolean>;
    static afterMouseScroll(paramarg0: Screen): Event<(param0: Screen, param1: number, param2: number, param3: number, param4: number, param5: boolean) => boolean>;
    static allowMouseClick(paramarg0: Screen): Event<(param0: Screen, param1: MouseButtonEvent) => boolean>;
    static allowMouseDrag(paramarg0: Screen): Event<(param0: Screen, param1: MouseButtonEvent, param2: number, param3: number) => boolean>;
    static allowMouseRelease(paramarg0: Screen): Event<(param0: Screen, param1: MouseButtonEvent) => boolean>;
    static allowMouseScroll(paramarg0: Screen): Event<(param0: Screen, param1: number, param2: number, param3: number, param4: number) => boolean>;
    static beforeMouseClick(paramarg0: Screen): Event<(param0: Screen, param1: MouseButtonEvent) => void>;
    static beforeMouseDrag(paramarg0: Screen): Event<(param0: Screen, param1: MouseButtonEvent, param2: number, param3: number) => void>;
    static beforeMouseRelease(paramarg0: Screen): Event<(param0: Screen, param1: MouseButtonEvent) => void>;
    static beforeMouseScroll(paramarg0: Screen): Event<(param0: Screen, param1: number, param2: number, param3: number, param4: number) => void>;
    private constructor()
}