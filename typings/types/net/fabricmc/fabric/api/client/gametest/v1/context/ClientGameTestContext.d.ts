import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TestInput } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/TestInput.d.ts'
import type { TestScreenshotComparisonOptions } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotComparisonOptions.d.ts'
import type { TestScreenshotOptions } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotOptions.d.ts'
import type { TestWorldBuilder } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/world/TestWorldBuilder.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Screen } from '../../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { FailableConsumer } from '../../../../../../../../org/apache/commons/lang3/function/FailableConsumer.d.ts'
import type { FailableFunction } from '../../../../../../../../org/apache/commons/lang3/function/FailableFunction.d.ts'
import type { Vector2i } from '../../../../../../../../org/joml/Vector2i.d.ts'
export interface ClientGameTestContext extends Object {
    assertScreenshotContains(arg0: string): Vector2i;
    assertScreenshotContains(arg0: TestScreenshotComparisonOptions): Vector2i;
    assertScreenshotEquals(arg0: string): void;
    assertScreenshotEquals(arg0: TestScreenshotComparisonOptions): void;
    clickScreenButton(arg0: string): void;
    computeOnClient<T extends Object | number | string | boolean>(arg0: (param0: Minecraft) => E): T;
    getInput(): TestInput;
    restoreDefaultGameOptions(): void;
    runOnClient(arg0: (param0: Minecraft) => void): void;
    setScreen(arg0: () => Screen): void;
    takeScreenshot(arg0: string): Path[];
    takeScreenshot(arg0: TestScreenshotOptions): Path[];
    tryClickScreenButton(arg0: string): boolean;
    waitFor(arg0: (param0: Minecraft) => kotlin.Boolean): number;
    waitFor(arg0: (param0: Minecraft) => kotlin.Boolean, arg1: number): number;
    waitForScreen(arg0: Class<Screen>): number;
    waitTick(): void;
    waitTicks(arg0: number): void;
    worldBuilder(): TestWorldBuilder;
}