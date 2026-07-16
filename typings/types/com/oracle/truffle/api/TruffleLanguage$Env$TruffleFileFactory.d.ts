import type { TruffleFile } from '../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { TruffleFile$FileSystemContext } from '../../../../com/oracle/truffle/api/TruffleFile$FileSystemContext.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TruffleLanguage$Env$TruffleFileFactory<P extends unknown> extends Object implements BiFunction<P, TruffleFile$FileSystemContext, TruffleFile> {
    private constructor()
    andThen<V extends unknown>(arg0: (param0: TruffleFile) => V): (param0: P, param1: TruffleFile$FileSystemContext) => V;
    apply(p: P, fileSystemContext: TruffleFile$FileSystemContext): TruffleFile;
    parsePath(p: P, fileSystemContext: TruffleFile$FileSystemContext): Path;
}