import type { File } from '../../../../../java/io/File.d.ts'
import type { JUnitLikeTestReporter } from '../../../../../net/minecraft/gametest/framework/JUnitLikeTestReporter.d.ts'
export class SavingXmlTestReporter extends JUnitLikeTestReporter {
    constructor(arg0: File)
    save(arg0: File): void;
}