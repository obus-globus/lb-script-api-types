import type { InternalResource$Env } from '../../../../com/oracle/truffle/api/InternalResource$Env.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InternalResource extends Object{
    unpackFiles(env: InternalResource$Env, targetDirectory: Path[]): void;
    versionHash(env: InternalResource$Env): string;
}