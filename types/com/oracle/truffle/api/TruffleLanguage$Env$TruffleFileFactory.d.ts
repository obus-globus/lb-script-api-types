import type { TruffleFile } from '../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { TruffleFile$FileSystemContext } from '../../../../com/oracle/truffle/api/TruffleFile$FileSystemContext.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TruffleLanguage$Env$TruffleFileFactory<P extends Object | number | string | boolean> extends Object implements BiFunction<P, TruffleFile$FileSystemContext, TruffleFile> {
    private constructor()
    andThen(arg0: (param0: R) => V): (param0: T, param1: U) => V;
    apply(p: P, fileSystemContext: TruffleFile$FileSystemContext): TruffleFile;
    parsePath(p: P, fileSystemContext: TruffleFile$FileSystemContext): Path[];
}