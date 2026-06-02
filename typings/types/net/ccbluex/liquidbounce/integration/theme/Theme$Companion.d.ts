import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Theme } from '../../../../../net/ccbluex/liquidbounce/integration/theme/Theme.d.ts'
import type { Theme$Origin } from '../../../../../net/ccbluex/liquidbounce/integration/theme/Theme$Origin.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
export class Theme$Companion extends Object {
    // private logger: Logger;
    load(url: string): Theme;
    load(origin: Theme$Origin, file: File): Theme;
}