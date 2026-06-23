import type { InternalResource } from '../../../../com/oracle/truffle/api/InternalResource.d.ts'
import type { InternalResource$Env } from '../../../../com/oracle/truffle/api/InternalResource$Env.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JDKSupport$LibTruffleAttachResource extends Object implements InternalResource {
    constructor()
    unpackFiles(env: InternalResource$Env, targetDirectory: Path[]): void;
    versionHash(env: InternalResource$Env): string;
}