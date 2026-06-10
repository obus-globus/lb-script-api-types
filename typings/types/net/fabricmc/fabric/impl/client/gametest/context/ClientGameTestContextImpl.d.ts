import type { NativeImage } from '../../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiPredicate } from '../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
import type { ClientGameTestContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/ClientGameTestContext.d.ts'
import type { TestScreenshotComparisonAlgorithm$RawImage } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotComparisonAlgorithm$RawImage.d.ts'
import type { TestScreenshotComparisonOptions } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotComparisonOptions.d.ts'
import type { TestScreenshotOptions } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotOptions.d.ts'
import type { TestWorldBuilder } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/world/TestWorldBuilder.d.ts'
import type { TestInputImpl } from '../../../../../../../net/fabricmc/fabric/impl/client/gametest/TestInputImpl.d.ts'
import type { TestScreenshotCommonOptionsImpl } from '../../../../../../../net/fabricmc/fabric/impl/client/gametest/screenshot/TestScreenshotCommonOptionsImpl.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Options } from '../../../../../../../net/minecraft/client/Options.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { FailableConsumer } from '../../../../../../../org/apache/commons/lang3/function/FailableConsumer.d.ts'
import type { FailableFunction } from '../../../../../../../org/apache/commons/lang3/function/FailableFunction.d.ts'
import type { Vector2i } from '../../../../../../../org/joml/Vector2i.d.ts'
export class ClientGameTestContextImpl extends Object implements ClientGameTestContext {
    static DEFAULT_TIMEOUT: number;
    static NO_TIMEOUT: number;
    static initGameOptions(paramarg0: Options): void;
    constructor()
    readonly input: TestInputImpl;
    assertScreenshotContains(arg0: string): Vector2i;
    assertScreenshotContains(arg0: TestScreenshotComparisonOptions): Vector2i;
    assertScreenshotEquals(arg0: string): void;
    assertScreenshotEquals(arg0: TestScreenshotComparisonOptions): void;
    clickScreenButton(arg0: string): void;
    computeOnClient<T extends Object | number | string | boolean, E extends Throwable>(arg0: (param0: Minecraft) => T): T;
    // private doAssertScreenshotContains(arg0: TestScreenshotComparisonOptions, arg1: (param0: TestScreenshotComparisonAlgorithm$RawImage<Object>, param1: TestScreenshotComparisonAlgorithm$RawImage<Object>) => boolean): Vector2i;
    // private doTakeScreenshot<T extends Object | number | string | boolean>(arg0: TestScreenshotCommonOptionsImpl<Object>, arg1: (param0: NativeImage) => T): T;
    getInput(): TestInputImpl;
    restoreDefaultGameOptions(): void;
    runOnClient<E extends Throwable>(arg0: (param0: Minecraft) => void): void;
    setScreen(arg0: () => Screen): void;
    takeScreenshot(arg0: string): Path[];
    takeScreenshot(arg0: TestScreenshotOptions): Path[];
    tryClickScreenButton(arg0: string): boolean;
    waitFor(arg0: (param0: Minecraft) => boolean): number;
    waitFor(arg0: (param0: Minecraft) => boolean, arg1: number): number;
    waitForScreen(arg0: Class<Screen>): number;
    waitTick(): void;
    waitTicks(arg0: number): void;
    worldBuilder(): TestWorldBuilder;
}