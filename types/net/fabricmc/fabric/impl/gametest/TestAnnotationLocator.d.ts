import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TestAnnotationLocator$TestMethod } from '../../../../../net/fabricmc/fabric/impl/gametest/TestAnnotationLocator$TestMethod.d.ts'
import type { FabricLoader } from '../../../../../net/fabricmc/loader/api/FabricLoader.d.ts'
import type { EntrypointContainer } from '../../../../../net/fabricmc/loader/api/entrypoint/EntrypointContainer.d.ts'
export class TestAnnotationLocator extends Object {
    constructor(arg0: FabricLoader)
    // private fabricLoader: FabricLoader;
    readonly testMethods: TestAnnotationLocator$TestMethod[];
    // private findMagicMethods(arg0: EntrypointContainer<Object>): TestAnnotationLocator$TestMethod[];
    // private findMagicMethods(arg0: EntrypointContainer<Object>, arg1: Class<Object>, arg2: TestAnnotationLocator$TestMethod[]): void;
    getTestMethods(): TestAnnotationLocator$TestMethod[];
    // private validateMethod(arg0: Method): void;
}