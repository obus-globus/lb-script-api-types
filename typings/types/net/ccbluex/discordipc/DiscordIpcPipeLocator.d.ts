import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DiscordIpcPlatform } from '../../../net/ccbluex/discordipc/DiscordIpcPlatform.d.ts'
export class DiscordIpcPipeLocator extends Object {
    static INSTANCE: DiscordIpcPipeLocator;
    // private MAX_PIPE_COUNT: number;
    // private environmentVariables: string[];
    // private sandboxSubdirectories: string[];
    locate(platform: DiscordIpcPlatform): string[];
    locate(platform: DiscordIpcPlatform, environment: JavaMap<string, string>, javaTemporaryDirectory: string | null, isDirectory: (param0: Path) => boolean): string[];
    // private locateUnix(environment: JavaMap<string, string>, javaTemporaryDirectory: string | null, isDirectory: (param0: Path) => boolean): string[];
}