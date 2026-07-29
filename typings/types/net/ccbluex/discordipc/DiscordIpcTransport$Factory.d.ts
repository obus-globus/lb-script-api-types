import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DiscordIpcTransport } from '../../../net/ccbluex/discordipc/DiscordIpcTransport.d.ts'
export interface DiscordIpcTransport$Factory extends Object{
    open(path: Path): DiscordIpcTransport;
}