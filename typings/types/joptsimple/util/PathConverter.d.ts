import type { Class } from '../../java/lang/Class.d.ts'
import type { Path } from '../../java/nio/file/Path.d.ts'
import type { ValueConverter } from '../../joptsimple/ValueConverter.d.ts'
import type { PathProperties } from '../../joptsimple/util/PathProperties.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class PathConverter extends Object implements ValueConverter<Path[]> {
    constructor(...arg0: PathProperties[])
    // private pathProperties: PathProperties[];
    convert(arg0: string): Path[];
    // private message(arg0: string, arg1: string): string;
    valuePattern(): string;
    valueType(): Class<Path[]>;
}