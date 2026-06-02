import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ScreenEvents$AfterBackground } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenEvents$AfterBackground.d.ts'
import type { ScreenEvents$AfterExtract } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenEvents$AfterExtract.d.ts'
import type { ScreenEvents$AfterInit } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenEvents$AfterInit.d.ts'
import type { ScreenEvents$AfterTick } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenEvents$AfterTick.d.ts'
import type { ScreenEvents$BeforeExtract } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenEvents$BeforeExtract.d.ts'
import type { ScreenEvents$BeforeInit } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenEvents$BeforeInit.d.ts'
import type { ScreenEvents$BeforeTick } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenEvents$BeforeTick.d.ts'
import type { ScreenEvents$Remove } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenEvents$Remove.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export class ScreenEvents extends Object {
    static AFTER_INIT: Event<(param0: Minecraft, param1: Screen, param2: number, param3: number) => void>;
    static BEFORE_INIT: Event<(param0: Minecraft, param1: Screen, param2: number, param3: number) => void>;
    static afterBackground(paramarg0: Screen): Event<(param0: Screen, param1: GuiGraphicsExtractor, param2: number, param3: number, param4: number) => void>;
    static afterExtract(paramarg0: Screen): Event<(param0: Screen, param1: GuiGraphicsExtractor, param2: number, param3: number, param4: number) => void>;
    static afterTick(paramarg0: Screen): Event<(param0: Screen) => void>;
    static beforeExtract(paramarg0: Screen): Event<(param0: Screen, param1: GuiGraphicsExtractor, param2: number, param3: number, param4: number) => void>;
    static beforeTick(paramarg0: Screen): Event<(param0: Screen) => void>;
    static remove(paramarg0: Screen): Event<(param0: Screen) => void>;
    private constructor()
}