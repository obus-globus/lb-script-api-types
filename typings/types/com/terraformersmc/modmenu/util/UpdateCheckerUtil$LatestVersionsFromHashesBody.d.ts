import type { UpdateChannel } from '../../../../com/terraformersmc/modmenu/api/UpdateChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UpdateCheckerUtil$LatestVersionsFromHashesBody extends Object {
    constructor(arg0: string[], arg1: string[], arg2: string, arg3: UpdateChannel[])
    algorithm: string;
    gameVersions: string[];
    hashes: string[];
    loaders: string[];
    versionTypes: string[];
}