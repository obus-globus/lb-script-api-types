import type { Stopwatch } from '../../../../com/google/common/base/Stopwatch.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { TestReporter } from '../../../../net/minecraft/gametest/framework/TestReporter.d.ts'
import type { Document } from '../../../../org/w3c/dom/Document.d.ts'
import type { Element } from '../../../../org/w3c/dom/Element.d.ts'
export class JUnitLikeTestReporter extends Object implements TestReporter {
    constructor(destination: File)
    // private destination: File;
    // private document: Document;
    // private stopwatch: Stopwatch;
    // private testSuite: Element;
    // private createTestCase(testInfo: GameTestInfo, name: string): Element;
    finish(): void;
    finish(): void;
    onTestFailed(testInfo: GameTestInfo): void;
    onTestSuccess(testInfo: GameTestInfo): void;
    save(file: File): void;
}