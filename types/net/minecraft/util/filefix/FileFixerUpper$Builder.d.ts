import type { DataFixerBuilder } from '../../../../com/mojang/datafixers/DataFixerBuilder.d.ts'
import type { DataFixerBuilder$Result } from '../../../../com/mojang/datafixers/DataFixerBuilder$Result.d.ts'
import type { Schema } from '../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileFix } from '../../../../net/minecraft/util/filefix/FileFix.d.ts'
import type { FileFixerUpper } from '../../../../net/minecraft/util/filefix/FileFixerUpper.d.ts'
export class FileFixerUpper$Builder extends Object {
    constructor(currentVersion: number)
    // private currentVersion: number;
    fileFixes: FileFix[];
    // private knownSchemas: Schema[];
    // private latestFileFixerVersion: number;
    addFixer(fileFix: FileFix): void;
    addSchema(fixerUpper: DataFixerBuilder, version: number, factory: (param0: number, param1: Schema) => Schema): Schema;
    build(dataFixer: DataFixerBuilder$Result): FileFixerUpper;
}