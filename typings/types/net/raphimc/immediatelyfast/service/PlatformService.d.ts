import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PlatformService extends Object{
    getConfigDirectory(): Path[];
    getModVersion(arg0: string): Optional<string>;
}