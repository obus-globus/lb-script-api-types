import type { OpenOption } from '../../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { FileAttribute } from '../../../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CopyOnWriteFSProvider$ChannelFactory<C extends unknown> extends Object{
    newChannel(path: Path[], options: OpenOption[], ...attrs: FileAttribute<Object>[]): C;
}