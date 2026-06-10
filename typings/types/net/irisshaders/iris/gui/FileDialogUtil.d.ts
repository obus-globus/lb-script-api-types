import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileDialogUtil$DialogType } from '../../../../net/irisshaders/iris/gui/FileDialogUtil$DialogType.d.ts'
export class FileDialogUtil extends Object {
    static fileSelectDialog(paramarg0: FileDialogUtil$DialogType, paramarg1: string, paramarg2: Path[][], paramarg3: string, paramarg4: (Object | null)[]): CompletableFuture<Optional<Path[][]>>;
    private constructor()
}