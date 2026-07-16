import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/apache/logging/log4j/Logger.d.ts'
export class ClassLoaderPriorityUtil extends Object {
    static getOverridingJars(): string[];
    static loadOverridingJars(paramarg0: Path, paramarg1: Logger): void;
    constructor()
}