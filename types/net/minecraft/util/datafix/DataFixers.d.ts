import type { DSL$TypeReference } from '../../../../com/mojang/datafixers/DSL$TypeReference.d.ts'
import type { DataFixer } from '../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileFixerUpper } from '../../../../net/minecraft/util/filefix/FileFixerUpper.d.ts'
export class DataFixers extends Object {
    static BLENDING_VERSION: number;
    static getDataFixer(): DataFixer;
    static getFileFixer(): FileFixerUpper;
    static optimize(paramtypesToOptimize: DSL$TypeReference[]): CompletableFuture<Object>;
    private constructor()
}